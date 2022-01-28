
interface AuthInputProps {
    label: string
    valor: any
    tipo: 'text' | 'email' | 'password'
    obrigatorio?: boolean
    naoRenderizar?: boolean
    valorMudou: (novoValor: any) => void
}
export default function AuthInput(props: AuthInputProps) {
    return props.naoRenderizar ? null : (
        <div className={`flex flex-col mt-4`}>
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type={props.tipo ?? 'text'} 
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-1
                    border-2 focus:border-blue-500 focus:outline-none
                    focus:bg-gray-300
                `}/>
        </div>
    )
}