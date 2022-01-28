import { createContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider(props) {
  let [user, setUser] = useState('Fulano 2')

  return (
    <AppContext.Provider value={{
      user,
      setUser
    }}>
      {props.children}
    </AppContext.Provider>
    )
}

export default AppContext

