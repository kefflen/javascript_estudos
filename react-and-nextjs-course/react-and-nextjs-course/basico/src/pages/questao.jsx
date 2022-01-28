import { useEffect, useState } from "react"

export default function questao() {
    let [obj, setObj] = useState(0)

    useEffect(
        () => fetch("http://localhost:3000/api/questao/2")
                .then(res => res.json())
                .then(setObj)
    )
    
    return (
        <div>
            <h1>id: {obj?.id}</h1>
        </div>
    )
}