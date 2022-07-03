import {PlusCircle} from 'phosphor-react'
import { ChangeEvent,FormEvent,isValidElement,SetStateAction, useState } from 'react'
import { task } from '../../App'
import styles from './styles.module.css'

interface CreateTaskProps {
    taskTextContent: string
    setTaskTextContent: React.Dispatch<SetStateAction<string>>
    setAllTasks: React.Dispatch<SetStateAction<task[]>>
}

export function CreateTask({
    setTaskTextContent,
    taskTextContent,
    setAllTasks}:CreateTaskProps){

    const [taskId, setTaskId] = useState(1)

    const IsInvalidTextArea = taskTextContent === ''

    function handleChangeTaskTextContent(event: ChangeEvent<HTMLTextAreaElement>){
        setTaskTextContent(event.target.value)
    }

    function handleAddNewTask(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        const newTask = 
        {
            id: taskId,
            content: taskTextContent,
            isCompleted: false
        }
        
        setAllTasks(state => {
            return[...state,newTask]
        })
        setTaskId(state => {
            return state + 1
        })
        setTaskTextContent('')
    
    }

    return(
        <section className={styles.createTaskContainer}>
            <form onSubmit={handleAddNewTask}>
                <textarea 
                    required
                    
                    value={taskTextContent}
                    onChange={handleChangeTaskTextContent}
                    placeholder='Adicione uma nova tarefa'
                />
                <button
                    type='submit'
                    disabled= {IsInvalidTextArea}
                >
                    <span>Criar</span>
                    <PlusCircle/>
                </button>
            </form>
        </section>
    )
}