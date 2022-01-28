import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarning } from "../components/icons";

export default function Autenticacao() {
    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>("login")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState([])

    function submeter() {
        if (modo == 'login') {
            console.log('login')
            exibirErro('Ainda não foi implentado')
        } else {
            console.log('cadastrar')
        }
    }

    function exibirErro(msg, segundos=5) {
        setErro(msg)
        setTimeout(() => setErro(null), segundos*1000)
    }

    return (
        <div className={`flex justify-center items-center h-screen`}>
            <div className={` hidden md:block md:w-1/2 h-screen`}>
                <img src="http://source.unsplash.com/random" alt="Imagem da tela de autenticação" 
                    className={`h-screen w-full object-cover`}/>
            </div>
            <div className={`w-full md:w-1/2 m-5`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {modo === 'login' ? "Entre com sua conta"
                        : 'Cadastre-se na plataforma'}
                </h1>
                {erro? (
                    <div className={`
                        bg-red-400 text-white rounded-lg py-3 px-5 my-2
                        border border-red-500 flex items-center
                    `}>
                        {IconWarning()}
                        <span className={`ml-3`}>{erro}</span>
                    </div>

                ) : false}

                <AuthInput label="Email" tipo="email" 
                    valor={email} valorMudou={setEmail} obrigatorio/>
                <AuthInput label="Senha" tipo="password" 
                    valor={senha} valorMudou={setSenha} obrigatorio/>
                <button onClick={submeter} className={`
                    w-full bg-indigo-500 hover:bg-indigo-600
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo == 'login' ? "Entrar" : "Cadastrar"}
                </button>
                <hr  className={`my-6 border-gray-300 w-full`}/>

                <button onClick={submeter} className={`
                    w-full bg-red-500 hover:bg-red-600
                    text-white rounded-lg px-4 py-3
                `}>
                    Entrar com o google
                </button>
                {modo === 'login'? (
                    <p className='mt-8 flex justify-end select-none'>
                        Ainda não tem uma conta?
                        <a onClick={() => setModo('cadastro')} className={`
                        text-blue-500 hover:text-blue-700
                        font-semibold cursor-pointer`}> 
                            Cadastro
                        </a>
                    </p>
                ) : (
                    <p className='mt-8 flex justify-end select-none'>
                        Ja pussui uma conta?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700
                            font-semibold cursor-pointer`}> 
                            Login
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}