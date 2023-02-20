import Porta from "../../../../components/Porta"
import { criarPortas, atualiazarPortas } from "../../../../function/porta"
import { useEffect, useState } from "react"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function jogo() {

    const router = useRouter()
    const [portas, setPortas]= useState([])
    const [valido, setValido] = useState(false)

   //validar daddos
   useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    const qtdePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValidas = temPresente >= 1 && temPresente <= portas
    setValido(qtdePortasValidas && temPresenteValidas)
   }, [portas])

    //determinar quem tem presente 
    useEffect(() =>{
      const portas = +router.query.portas
      const temPresente = +router.query.temPresente
      setPortas(criarPortas(portas, temPresente))
    }, [router?.query])
 
  
  function renderizarPortas(){
    return  portas.map(porta => {
      return <Porta key={porta.numero} value={porta} 
      onChange={novaPorta => setPortas(atualiazarPortas(portas, novaPorta))}
       />
    })
  }

  return (
    <div className={styles.jogo}>
        <div className={styles.portas}>
        { valido ?
        renderizarPortas() :
          <h2>Valores inválidos</h2>
        }
        </div>

        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar Jogo</button>
            </Link>
        </div>
      
    </div>
  )
}