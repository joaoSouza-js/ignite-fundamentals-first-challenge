import {Trash} from 'phosphor-react'
import { useState } from 'react'
import { task } from '../../App'

import styles from './styles.module.css'

interface TaskProps{
    task: task
    onDeleteOneTask: (taskId:number) => void,
    onCheckCompletedTask: (taskId: number) => void
    
}

export function Task({
    task,
  
    onDeleteOneTask,
    onCheckCompletedTask }:TaskProps){

    function handleDeleteOneTask(){
        onDeleteOneTask(task.id)
    }

    function handleChckCompletedTask(){
        onCheckCompletedTask(task.id)
    }

    return(
        <div className={styles.task}>
            <input
                defaultChecked = {task.isCompleted}
                onChange={handleChckCompletedTask}
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
                onClick={handleDeleteOneTask}
                title='Lixiera'>
                <Trash
                    size={'1.090rem'}
                />
            </button>
            
        </div>
    )
}