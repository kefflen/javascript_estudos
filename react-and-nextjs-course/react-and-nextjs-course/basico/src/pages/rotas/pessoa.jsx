import {useRouter} from "next/router"

export default function pessoa() {
    const router = useRouter()
    const nome = router.query.nome
    const idade = router.query.idade
    return (
        <div>
            <h1>Nome: {nome} - Idade: {idade}</h1>
            <button onClick={() => router.push("/rotas")}>Voltar para '/rotas'</button>
        </div>
    )
}