import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type User = {
  id: string
  avatar_url: string
  name: string
  login: string
}

type AuthContextData = {
  user: User | null
  signInUrl: string
  isUserLoggedIn: () => boolean
  signOut: () => void
}

type AuthenticateReponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const tokenKey = "@dowhile:token"
  const [ user, setUser ] = useState<User | null>(null)
  const clientId = '7b21af8395b91cd16d7c'
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}`

  
  async function signIn(githubCode: string) {
    const { data } = await api.post<AuthenticateReponse>("authenticate", {
      code: githubCode
    })
    const { user, token } = data
    
    localStorage.setItem(tokenKey, token)
    
    const bearerToken = `Bearer ${token}`
    api.defaults.headers.common.authorization = bearerToken
    
    setUser(user)
  }
  
  
  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes("?code=")
    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=")
      signIn(githubCode)
      window.history.pushState({signInUrl, user}, '', urlWithoutCode)
    }
  })
  
  useEffect(() => {
    const token = localStorage.getItem(tokenKey)
    if (token) {
      const bearerToken = `Bearer ${token}`

      api.defaults.headers.common.authorization = bearerToken
      api.get<User>("profile").then(response => {
        const user = response.data
        setUser(user)
      })
    }

  }, [])

  return (
    <AuthContext.Provider value={{
      signInUrl, user,
      isUserLoggedIn: () => Boolean(user),
      signOut: () => {
        localStorage.removeItem(tokenKey)
        setUser(null)
      }
      }}>
      {children}
    </AuthContext.Provider>
  )
}