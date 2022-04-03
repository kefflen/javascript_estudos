import React from "react"
import { fakeAuthProvider } from "../auth"

interface AuthContextType {
  user: any
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}

export const AuthContext = React.createContext<AuthContextType>(null!)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>(() => localStorage.getItem('user'))

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser)
      localStorage.setItem('user', newUser)
      callback()
    })
  }

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null)
      localStorage.removeItem('user')
      callback()
    })
  }
  let value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}