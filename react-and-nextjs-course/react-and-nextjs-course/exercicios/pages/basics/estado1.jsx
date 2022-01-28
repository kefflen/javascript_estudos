import { useState } from "react"


export default function estado1() {
    let [x, seterX] = useState(0)
    let [y, seterY] = useState(0)

    function mudarPosicao(event) {
        seterX(event.clientX)
        seterY(event.clientY)
    }
    let style = {
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
    return (
        <div style={style} onMouseMove={mudarPosicao}>
            <span>Mouse X: {x}</span>
            <span>Mouse Y: {y}</span>
        </div>
    )
}