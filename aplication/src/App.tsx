import "./global/styles.module.css"
import  styles from './app.module.css'

import clipBoardImage from './assets/Clipboard.svg'

import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"
import { Task } from "./components/Task"


function App() {

  return (
    <div className="App">
      <Header/>

      <main className={styles.container}>
        <CreateTask/>
        
        <section className={styles.taskStatus}>
          <div className={styles.created}>
            <strong>Tarefas Criadas</strong> <span>0</span>
          </div>
          <div className={styles.done}>
            <strong> Cuncluídas</strong> <span>0</span>
          </div>
        </section>

        <article className={styles.tasks}>
          { /*<div className={styles.withoutTask}>
            <img src={clipBoardImage} alt="" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
               Crie tarefas e organize seus itens a fazer
            </p>
            </div> */}
            <Task/>
        </article>


      </main>
    </div>
  )
}

export default App
