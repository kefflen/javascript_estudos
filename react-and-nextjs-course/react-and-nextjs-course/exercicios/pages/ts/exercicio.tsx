interface PessoaProp {
    nome: string
    idade?: number
}

export default function Pessoa(props: PessoaProp) {
    return (
        <div>
            <div>Nome: {props.nome}</div>
            <div>Idade: {props.idade?? "Não informada"}</div>
        </div>
    )
}