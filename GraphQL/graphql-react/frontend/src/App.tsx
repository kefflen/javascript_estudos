import { gql, useQuery } from "@apollo/client"
import { NewUserForm } from "./components/NewUserForm"

export const GET_USERS = gql`
  query {
    users {
      id
      name
    }
  }
`
type User = {
  name: string
  id: string
}

function App() {
  const { data, loading } = useQuery<{ users: User[]}>(GET_USERS)

  if (loading) {
    return <p>Carregando...</p>
  }
  
  return (
    <div>
      <ul>
      {data?.users.map(user => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
    <NewUserForm></NewUserForm>
    </div>
  )
}

export default App
