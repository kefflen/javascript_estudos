import React, { ChangeEvent, useState } from 'react';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useContext(AuthContext)
  const locationState = location.state as { from: string|undefined }
  const from = locationState?.from || '/'

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  async function handleLogin() {
    const isLogged = await signIn(email, password)
    if (isLogged) return navigate(from, { replace: true })
    else alert('Email ou senha invalida!!!')
  }

  return (
    <div>
      <h2>Pagina fechada</h2>

      <input placeholder='Digite seu email...'
        type="text" value={email} onChange={handleEmailInput} />
      <input placeholder='Digite sua senha'
        type="password" value={password} onChange={e => setPassword(e.target.value)} />
      
      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}

export default Login
