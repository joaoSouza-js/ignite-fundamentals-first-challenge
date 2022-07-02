import "./global/styles.module.css"
import  styles from './app.module.css'

import clipBoardImage from './assets/Clipboard.svg'

import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"
import { Task } from "./components/Task"
import {  useState } from "react"

export interface  task {
  id: number
  content: string
  isCompleted: boolean
}

function App() {
  const [allTaks, setAllTasks] = useState<task[]>([])
  const [taskTextContent, setTaskTextContent] = useState('')

  const tasksDone = allTaks.filter(task =>{
    return task.isCompleted === true
  })



  return (
    <div className="App">
      <Header/>
      <main className={styles.container}>
        <CreateTask
          setAllTasks = {setAllTasks}
          taskTextContent = {taskTextContent}
          setTaskTextContent = {setTaskTextContent}
        />
        
        <section className={styles.taskStatus}>
          <div className={styles.created}>
            <strong>Tarefas Criadas</strong> <span>0</span>
          </div>
          <div className={styles.done}>
            <strong> Cuncluídas</strong> <span>{tasksDone.length}</span>
          </div>
        </section>

        <article className={styles.tasks}>
          { 
            allTaks.length === 0
            ?
              <div className={styles.withoutTask}>
                <img src={clipBoardImage} alt="" />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </p>
              </div> 

            :
            allTaks.map(task =>{
              return(
                <Task
                  key={task.id}
                />
              )
            })
          }
            
        </article>


      </main>
    </div>
  )
}

export default App
