

export const BoaTarde = props => <h1>Boa tarde {props.nome}</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}</h1>

//Pode-se tirar os exports acima e substituir por:
//export {BoaTarde, BoaNoite}
export default {BoaTarde, BoaNoite}

