function gerarLista(qtd) {
    let lista = []
    for (let i=1; i <= qtd; i++) {
        if (i < qtd) {
            lista.push(<span key={i}> {i}, </span>)
        } else {
            lista.push(<span key={i}>{i}</span>)
        }
        
    }
    return lista
}


export default function lista() {
    return <h1>{gerarLista(10)}</h1>
}