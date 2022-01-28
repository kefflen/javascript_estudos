import Titulo from "../../components/Titulo";


export default function UsandoComp() {
    return (
        <>
            <Titulo titulo="Componente Titulo" subtitulo="Como usar outros componentes e passar propiedades"/> 
            <Titulo titulo="Testando titulo menor" subtitulo="Maneiras interessantes de usar propiedades" pequeno/> 
        </>
    )
}