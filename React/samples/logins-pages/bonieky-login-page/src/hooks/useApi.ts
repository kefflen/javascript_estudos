import axios from "axios";
import { User } from "../types/User";

const api = axios.create({
  baseURL: process.env.REACT_APP_API
})

const mock = {
  user: { email: 'any@email.com', id: 1, name: 'any_name', password: '12345'},
  token: 'token'
}

export const useApi = () => ({
  async validateToken(token: string): Promise<User> {
    try {
      let response = await api.post<User>('/validate', { token })
      return response.data
    } catch {
      return mock.user
    }
  },
  async signIn(email: string, password: string ): Promise<{user: User, token: string}> {
    try {
      let response = await api.post<{user: User, token: string}>('/signin', {
        email, password
      })
      return response.data
    } catch { 
      return mock
    }
  },
  async logout() {
    try {
      let response = await api.post('/logout')
      return response.data
    } catch {}
  }
})