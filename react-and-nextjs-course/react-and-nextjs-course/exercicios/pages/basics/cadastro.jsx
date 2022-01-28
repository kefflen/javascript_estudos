import { useState } from "react"

export default function cadastro() {
    let [users, setUsers] = useState([])
    let [name, setName] = useState("Indefinido")
    let [idade, setIdade] = useState(0)

    async function updateUsers() {
        let users = await fetch("/api/pessoa")
        setUsers(users)
    }

    async function salvarUser() {
        let res = await fetch("app/pessoa" {
            method:"POST",
            body: {name, idade}
        })
        updateUsers()
    }

    return (
        <div>
            <h1>Digite o nome</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <h1>Digite a idade</h1>
            <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <table>
                {renderizarLinhas(users)}
            </table>
        </div>
    )
}

function renderizarLinhas(users) {
    return users.map(user => {
        return <li>Name: {user.name} - Idade: {user.idade}</li>
    })
}