import { Interface } from "readline"
import styles from ".././src/styles/Porta.module.css"
import PortaModel from "../model/porta"
import Presente from "./Presente"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps ){

    const porta  = props.value
 
    const selecionada = porta.selecionada && !porta.aberta  ? styles.selecionada : ''

    const alternarSelecao = () => props.onChange(porta.alternarSelecao())
    //linha modificada
    const abrir = (e: { stopPropagation: () => void }) => {           
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function rederizarPorta() {
        return (
            
                <div className={styles.porta}>
                    <div className={styles.numero}>{porta.numero}</div>
                    <div className={styles.macaneta} onClick={abrir}></div>
                </div>
            
        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={ `${styles.frame} ${selecionada}`}>
                {porta.fechada ? rederizarPorta() : porta.temPresente ? <Presente /> : false }         
            </div> 
            <div className={styles.chao}></div>
        </div>
        
    )
}