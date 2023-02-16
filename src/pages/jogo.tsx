import Porta from "components/Porta"
import { criarPortas, atualiazarPortas } from "function/porta"
import { useState } from "react"
import styles from "../styles/Jogo.module.css"

export default function jogo() {
    const [portas, setPortas]= useState(criarPortas(4,3))
  
  function renderizarPortas(){
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualiazarPortas(portas, novaPorta))}
       />
    })
  }

  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
        {renderizarPortas()}
        </div>

        <div className={styles.botoes}>

        </div>
      
    </div>
  )
}