import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { GlobalContext } from "../context/globalContext"

export default function LoginPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { signin } = useContext(GlobalContext)

  const state = location.state as { from?: Location }
  const from = state.from?.pathname || '/'
  const handleClick = () => {
    signin()

    navigate(from, { replace: true })
  }

  return (
    <div>
      <div>Login page</div>
      <button onClick={handleClick}>Signin</button>
    </div>
  )
}