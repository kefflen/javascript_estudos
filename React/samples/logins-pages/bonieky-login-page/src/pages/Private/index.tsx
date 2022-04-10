import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth"

const Private: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <h2>Pagina privada</h2>
      Ola {user?.name}, tudo bem?
    </div>
  )
}


export default Private