import { useState } from 'react'

export function UserHooks () {
  const name = "Leonardo"
  const email = "leornado@gmail.com"
  let [user, setUser] = useState(name)
  function loadUser() {
    
    return {
      name, email
    }
  }
  return {
    user, loadUser
  }
}