import {v4 as uuidv4} from 'uuid'
import {PlusCircle} from 'phosphor-react'
import  {ChangeEvent,FormEvent,SetStateAction,useState} from 'react'

import { task } from '../../App'

import styles from './styles.module.css'

interface CreateTaskProps {
    setAllTasks: React.Dispatch<SetStateAction<task[]>>
}

export function CreateTask({
 
    setAllTasks}:CreateTaskProps){

    const [taskTextContent, setTaskTextContent] = useState('')


    const IsInvalidTextArea = taskTextContent === ''

    function handleChangeTaskTextContent(event: ChangeEvent<HTMLTextAreaElement>){
        setTaskTextContent(event.target.value)
    }

    function handleAddNewTask(event:FormEvent<HTMLFormElement>){
        event.preventDefault()

        const newTask = 
        {
            id: uuidv4(),
            content: taskTextContent,
            isCompleted: false
        }
        
        setAllTasks(state => {
            return[...state,newTask]
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