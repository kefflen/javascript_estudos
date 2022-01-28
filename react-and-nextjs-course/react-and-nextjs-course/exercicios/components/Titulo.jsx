
export default function Titulo(props) {
    return !props.pequeno ? (
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </>
    ) : (
        <>
            <h4>{props.titulo}</h4>
            <p>{props.subtitulo}</p> 
        </>
    )
}
