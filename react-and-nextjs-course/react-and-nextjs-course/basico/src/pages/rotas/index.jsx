import router from "next/router"
import Link from "next/link"
import { useState } from "react"
export default function rotas() {
    function procurarPessoa() {
        router.push({
            pathname: `rotas/pessoa`,
            query: {nome: cat, idade: id}
        })
    }
    let [cat, setCat] = useState("Indefinido")
    let [id, setId] = useState("1")
    return (
        <div>
            <Link href="/">
                <h1>Voltar para o inicio</h1>
            </Link>

            <div>
                <h2>Procurar produto</h2>
            </div>
            <div>
                Categoria:
                <input type="text" value={cat}
                    onChange={(e) => setCat(e.target.value)} placeholder="Categoria..."/>
            </div>
            <div>
                ID:
                <input type="text" value={id}
                    onChange={(e) => setId(e.target.value)} placeholder="Categoria..."/>
            </div>
            <button onClick={() => router.push(`/rotas/${cat}/${id}`)}>Procurar</button>
            <button onClick={procurarPessoa}>Procurar pessoa</button>
        </div>
    )
}