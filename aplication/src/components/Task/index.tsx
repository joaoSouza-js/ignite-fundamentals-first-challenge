import {Trash} from 'phosphor-react'
import { useState } from 'react'

import styles from './styles.module.css'

interface TaskProps{
    id: number
    content: string,
    onDeleteOneTask: (taskId:number) => void
}

export function Task({content,id,onDeleteOneTask}:TaskProps){

    function handleDeleteOneTask(){
        onDeleteOneTask(id)
    }

    return(
        <div className={styles.task}>
            <input 
                id={`checkbox${id}`}
                type='checkbox'
                
            />
            <label htmlFor={`checkbox${id}`}/>
            <p>{content}</p>
           
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