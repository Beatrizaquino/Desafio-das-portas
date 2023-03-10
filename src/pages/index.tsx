import styles from "../styles/Form.module.css"
import Card from "components/Card"
import Link from "next/link"
import EntradaNumerica from "components/EntradaNumerica"
import { useState } from "react"

export default function Form() {

  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.form} >
      <div>
      < Card bgcolor="#c0392c"> 
      <h1>Monty hall</h1>
      </Card> 
       <Card>
        <EntradaNumerica text="Qtde" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
       </Card>
      </div>

      <div>
      < Card>
        <EntradaNumerica  text="Porta com Presente" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
      </Card> 
      
       <Card bgcolor="#28a085">
        <Link href={`jogos/${qtdePortas}/${comPresente}`} className={styles.lin}>Iniciar</Link>
       
       </Card>
      </div>   
    </div>
  )
}
 