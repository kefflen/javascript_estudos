import { createContext, ProviderProps, ReactPropTypes, useState } from "react";

type globalVariables = {
  username: string|null,
  signin() : void
}

const defaultContext = {
  username: null,
  signin() {}
}

export const GlobalContext = createContext<globalVariables>(defaultContext)

export default function GlobalProvider({ children }: { children: JSX.Element|JSX.Element[]}) {
  const [username, setUsername] = useState<string|null>(null)
  function signin() {
    setUsername('Any_User')
  }
  console.log(children)

  return (
    <GlobalContext.Provider value={{username, signin}}>
      {children}
    </GlobalContext.Provider> 
  )
}