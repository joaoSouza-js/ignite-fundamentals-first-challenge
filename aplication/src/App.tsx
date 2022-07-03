import "./global/styles.module.css"
import  styles from './app.module.css'

import {  useState } from "react"
import clipBoardImage from './assets/Clipboard.svg'

import { Task } from "./components/Task"
import { Modal } from "./components/Modal"
import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"

export interface  task {
  id: string
  content: string
  isCompleted: boolean
}

function App() {

  const [allTasks, setAllTasks] = useState<task[]>([])
  const [taskIdToDelete, setTaskIdToDelete] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const tasksDone = allTasks.filter(task => {
    return task.isCompleted === true
  })


  function deleteOneTask(){

    const allTasksWithoutOne = allTasks.filter(task => {
      return task.id != taskIdToDelete
    })

    setAllTasks( state => {
      return allTasksWithoutOne
    })

  }

  function handleCheckCompletedTask(taskId: string){
    const allTaksWithIsCompletdUpdate = allTasks.map(task => {
      if(task.id === taskId){
        task.isCompleted
        ? task.isCompleted = false
        : task.isCompleted = true
        
      }
      return task

    })
    setAllTasks(allTaksWithIsCompletdUpdate)
  }

  function changeModalState(){
    isModalVisible
    ? setIsModalVisible(state => {
      return(false)
    })
    : setIsModalVisible(state => {
      return true
    })
  }

  return (
    <div className={styles.app}>

      <Header/>

      <main className={styles.container}>

        <CreateTask
          setAllTasks = {setAllTasks}
        />
        
        <section className={styles.taskStatus}>
          <div className={styles.created}>
            <strong>Tarefas Criadas</strong>
            <span>{allTasks.length}</span>
          </div>
          <div className={styles.done}>
            <strong> Cuncluídas</strong>
             <span>
              {
                tasksDone.length === 0
                ? tasksDone.length
                : `${tasksDone.length} de ${allTasks.length}`
              }
             </span>
          </div>
        </section>

        <article className={styles.tasks}>
          { 
            allTasks.length === 0
            ?
              <div className={styles.withoutTask}>
                <img src={clipBoardImage} alt="" />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                    Crie tarefas e organize seus itens a fazer
                </p>
              </div> 

            :
            allTasks.map(task =>{
              return(
                <Task
                  key={task.id}
                  task = {task}
                  onChangeModalState = {changeModalState}
                  setTaskIdToDelete = {setTaskIdToDelete}
                  onCheckCompletedTask = {handleCheckCompletedTask}
                />
              )
            })
          }    
        </article>
      </main>

      <Modal
        IsModalVisible = {isModalVisible}
        onChangeModalState = {changeModalState}
        onDeleteOneTask = {deleteOneTask}
      />

    </div>
  )
}

export default App
