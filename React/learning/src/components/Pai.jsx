import React from "react";
import Filho from "./Filho";
import { childrenWithProps } from "../utils/ultils";


export default props => (
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <hr />
        <ul>
            {
                childrenWithProps(props, Filho)
            }
        </ul>
    </div>
)