import { faCheck, faCoffee } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface SelecaoProps {
    valor: boolean
}
export default function Selecao(props: SelecaoProps) {
    const gradient = props.valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

    return (
        <div className={`
            h-7 w-7
            flex justify-center items-center text-white
            rounded-full cursor-pointer
            border border-gray-400
            ${gradient}
        `}>
            {props.valor? <FontAwesomeIcon size="xs" icon={faCheck}/> : ''}
        </div>
    )
}