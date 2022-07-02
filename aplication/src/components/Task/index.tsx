import {Trash} from 'phosphor-react'
import { useState } from 'react'

import styles from './styles.module.css'

export function Task(){
    const [isRadioChecked, setIsRadioChecked] = useState(false)

    function handleInputRadioChecked(){
        isRadioChecked 
        ? setIsRadioChecked(false)
        : setIsRadioChecked(true)
    }

    return(
        <div className={styles.task}>
            <input 
                id='checkbox01'
                type='checkbox'
                
            />
            <label htmlFor="checkbox01"/>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <div className={styles.imageContent}>
                <Trash
                    size={'1.090rem'}
                />
            </div>
        </div>
    )
}