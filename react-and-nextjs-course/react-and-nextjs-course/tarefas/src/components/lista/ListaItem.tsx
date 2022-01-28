import Selecao from "./Selecao";

interface ListaItemProps {
    valor: string
    concluido: boolean
    alterarStatus: () => void

}

export default function ListaItem(props: ListaItemProps) {
    const styleConcluido = props.concluido ? 'line-through text-gray-300' : 'text-gray-500'
    return (
        <li onClick={props.alterarStatus} className={`
            text-black cursor-pointer
            flex items-center p-5 text-xl
            border-b border-gray-400
        `}>
            <Selecao valor={props.concluido}/>
            <span className={`
                ml-5 font-light
                ${styleConcluido}
            `}>
                {props.valor}
            </span>
        </li>
    )
}