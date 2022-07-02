import {PlusCircle} from 'phosphor-react'
import styles from './styles.module.css'

export function CreateTask(){
    return(
        <section className={styles.createTaskContainer}>
            <form>
                <textarea placeholder='Adicione uma nova tarefa'/>
                <button>
                    <span>Criar</span>
                    <PlusCircle/>
                </button>
            </form>
        </section>
    )
}