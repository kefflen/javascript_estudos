import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "."

const RequireAuth: React.FC = ({ children }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  if (!user) {
    return <Navigate to={'/login'} state={{ location: location.pathname }} replace/>
  }
  return <>{children}</>
}

export default RequireAuth