import { useState } from "react"

export default function cadastro() {
    let [users, setUsers] = useState([])
    let [name, setName] = useState("Indefinido")
    let [idade, setIdade] = useState(0)

    async function updateUsers() {
        let res = await fetch("/api/pessoa")
        let usersObj = await res.json()
        setUsers(usersObj)
    }

    async function salvarUser() {
        await fetch("/api/pessoa", {
            method:"POST",
            body: JSON.stringify({name, idade})
        })
        updateUsers()
    }

    return (
        <>
            <h1>Digite o nome</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h1>Digite a idade</h1>
            <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <button onClick={salvarUser}>Salvar usuario</button>
            <div>
                {renderizarLinhas(users)}
            </div>
        </>
    )
}

function renderizarLinhas(users) {
    return users.map((user, i) => {
        return <li key={i}>Nome: {user.nome} - Idade: {user.idade}</li>
    })
}