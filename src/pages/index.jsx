import Presente from "../../components/Presente"
import Porta from "../../components/Porta"
import PortaModel from "model/porta"
import { useState } from "react"
import { atualiazarPortas, criarPortas } from "function/porta"

export default function Home() {

 

  const [portas, setPortas]= useState(criarPortas(3,2))
  
  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualiazarPortas(portas, novaPorta))}
       />
    })
  }

  return (
    <div style={{display:"flex",}}>
      {renderizarPortas()}
    </div>
  )
}
 