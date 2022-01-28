import useAppData from "../../data/hook/useAppData";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    let { titulo, subtitulo } = props
    const ctx = useAppData()
    return (
        <div className={`
            flex h-screen w-screen ${ctx.tema}
        `}>
            <MenuLateral/>
            <div className={`
                flex flex-col w-full p-7 bg-gray-200 dark:bg-gray-700
            `}>
                <Cabecalho titulo={titulo} subtitulo={subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
            </div>
        </div>
    )
}