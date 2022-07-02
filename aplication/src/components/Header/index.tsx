import toDoLogo from "../../assets/to-doLogo.svg"
import styles from "./styles.module.css"

export function Header(){
    return(
        <header className={styles.header}>
            <img src={toDoLogo}
                alt="um desenho de um foguete azul decolando a lado a plavra escitro 'to do'"
                title="logo todo"
             />
        </header>
    )
}