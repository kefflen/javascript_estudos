import { useContext } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthContext } from './contexts/Auth'
import RequireAuth from './contexts/Auth/RequireAuth'
import Home from './pages/Home'
import Login from './pages/login'
import Private from './pages/Private'

function App() {
  const { user, signOut } = useContext(AuthContext)



  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/private'}>Private page</Link>
          {user && <Link to={'/login'} onClick={signOut}>Sair</Link>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/private' element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
