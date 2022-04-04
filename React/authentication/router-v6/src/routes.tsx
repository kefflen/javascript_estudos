import { useContext } from 'react'
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import { GlobalContext } from './context/globalContext'
import LoginPage from './pages/LoginPage'



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<div>Teste</div>} />
        <Route path='/protected' element={
          <RequireAuth >
            <Protected />
          </RequireAuth>
        } />
        <Route path='/login' element={<LoginPage />} />
      </Switch>
    </BrowserRouter>
  )
}

// Um tipo de middleware
function RequireAuth({ children }: { children: JSX.Element }) {
  let location = useLocation()
  const { username } = useContext(GlobalContext)
  console.log({
    location, username
  })
  if (!username) {

    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function Protected() {
  return <div>Protected</div>
}