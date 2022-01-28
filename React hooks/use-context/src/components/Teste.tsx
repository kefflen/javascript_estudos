import { useContext } from "react"
import { AppContext } from "../App"

export default function Teste() {
  let {name, setName} = useContext(AppContext)

  return (
  <div style={{'display': 'flex', "flexDirection": "column"}}>
    {name}
    <hr/>
    <input type="text" value={name} onChange={event => setName(event.target.value)}/>
  </div>)
}