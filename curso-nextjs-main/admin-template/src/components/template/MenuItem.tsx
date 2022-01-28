import Link from "next/link"

interface MenuItem {
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (event: any) => void
}
export default function MenuItem(props) {
    function renderizarConteudo() {
        return (
            <a className={`
                flex flex-col justify-center 
                items-center h-20 w-20 cursor-pointer text-gray-600 dark:text-gray-400
                ${props.className}`}>
                {props.icone}
                <span className="text-xs font-ligh">
                    {props.texto}
                </span>
            </a>
        )
    }
    return (
        <li className={`flex hover:bg-gray-300 dark:hover:bg-gray-700`} onClick={props.onClick}>
            {props.url ? (
                <Link href={props.url}>   
                    {renderizarConteudo()}
                </Link>
            ) : (
                renderizarConteudo()
            )}
        </li>
    )
}
