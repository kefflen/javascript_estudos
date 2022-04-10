import React, { createContext, useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";


export type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => Promise<Boolean>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const api = useApi()

  useEffect(() => {
    const func = async function() {
      const token = getToken()
      if (!token) return

      const validate = await api.validateToken(token)
    }
    func()
  }, [api])

  const signIn = async (email: string, password: string) => {
    const { user, token } = await api.signIn(email, password)
    if (user && token) {
      setToken(token)
      setUser(user)

      return true
    }
    return false
  }

  const signOut = async () => {
    await api.logout()
    localStorage.removeItem('authToken')
    setUser(null)
  }

  function setToken(token: string) {
    localStorage.setItem('authToken', token)
  }

  function getToken() {
    return localStorage.getItem('authToken')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}