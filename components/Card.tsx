import styles from "../src/styles/Card.module.css"

interface CardPages {
    children: any
    bgcolor: string
}

export default function Card(props: CardPages) {
    return (
        <div className={styles.card} style={{
            backgroundColor: props.bgcolor ?? "#fff"
        }}>
         {props.children}
        </div>
    )
}