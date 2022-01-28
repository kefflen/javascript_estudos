import axios from "axios"
import { sign } from 'jsonwebtoken'

import AppException from "../exceptions/appException"
import prismaClient from '../prisma/index'

interface IAccessTokenReponse {
  access_token: string
}

interface IUserResponse {
  avatar_url: string,
  login: string,
  id: number,
  name: string
}

class AuthenticateUserService {
  async execute(code: string) {
    const url = `http://github.com/login/oauth/access_token`
    const client_id = process.env.GITHUB_CLIENT_ID
    const client_secret = process.env.GITHUB_CLIENT_SECRET

    const { data: accessTokenResponse } = await axios.post<IAccessTokenReponse>(url, null, {
      params: {
        client_id, client_secret, code
      },
      headers: {
        "Accept": "application/json"
      }
    })

    if (!accessTokenResponse.access_token) {
      throw new AppException("Access token invalid", 401)
    }

    const accessToken = accessTokenResponse.access_token
    const response = await axios.get<IUserResponse>("http://api.github.com/user", {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })

    const {
      login, id, name, avatar_url
    } = response.data


    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id
      }
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: id, login, avatar_url, name
        }
      })
    }

    const token = sign({
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
        id: user.id,
      }
    }, process.env.SECRET?? 'secret', {
      subject: user.id,
      expiresIn: '2d'
    })

    return {user: response.data, token}
  }
}

export {
  AuthenticateUserService
}
