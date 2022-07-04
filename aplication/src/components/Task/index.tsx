import { task } from '../../App'

import {Trash} from 'phosphor-react'
import { SetStateAction } from 'react'

import styles from './styles.module.css'

interface TaskProps{
    task: task,
    onChangeModalState: () => void,
    onCheckCompletedTask: (taskId: string) => void
    setTaskIdToDelete: React.Dispatch<SetStateAction<string>>
    
}

export function Task({
    task,
    onChangeModalState,
    setTaskIdToDelete,
    onCheckCompletedTask }:TaskProps){

    

    function handleCheckCompletedTask(){
        onCheckCompletedTask(task.id)
    }

    function handleSetTaskIdtoDelete(){
        setTaskIdToDelete(task.id)
        onChangeModalState()
    }

    return(
        <li className={styles.task}>
            <input
                defaultChecked = {task.isCompleted}
                onChange={handleCheckCompletedTask}
                id={`checkbox${task.id}`}
                type='checkbox'
           
            />
            <label htmlFor={`checkbox${task.id}`}/>
            <p style={
                task.isCompleted 
                ?{textDecoration: 'line-through', color: '#808080'}
                : undefined
            }>{task.content}</p>
           
            <button
                onClick={handleSetTaskIdtoDelete}
                title='Lixiera'>
                <Trash
                    size={'1.090rem'}
                />
            </button>
            
        </li>
    )
}