import React from "react"
import ReactDOM from "react-dom"

//Components
import Saudacao from "./components/Saudacao"
import Pai from "./components/Pai"
import Filho from "./components/Filho"
ReactDOM.render(
    <div>
        <Saudacao nome="Kefflen" tipo="Bom dia"/>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" sobrenome="Silveira"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
    </div> 
    , document.getElementById('root'))