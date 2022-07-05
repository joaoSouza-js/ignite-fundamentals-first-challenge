import { MouseEvent} from 'react'
import styles from './styles.module.css'

interface ModalPros {
    IsModalVisible: boolean
    onChangeModalState: () => void,
    onDeleteOneTask : () => void,
}


export function Modal({IsModalVisible, onChangeModalState,onDeleteOneTask}:ModalPros){
    function handleChangeModal(){
        onChangeModalState()

    }
    
    function handleDeleteOneComment(){
        onDeleteOneTask()
        handleChangeModal()
    }

    function handleModalOutSidClick(event: MouseEvent<HTMLDivElement>){
        const div = event.target as HTMLDivElement

        if(div.className === styles.modalContainer){
            onChangeModalState()
        }

    }

 

    
    return(
        <>
            {IsModalVisible
            && <div
                onClick={handleModalOutSidClick}
                className={styles.modalContainer}
                >
                    <div className={styles.content}>
                        <strong>Excluir comentário</strong>
                        <p>Você tem certeza que gostaria de excluir este comentário?</p>

                        <footer>
                            <button
                                className={styles.cancel}
                                onClick={handleChangeModal}
                                >
                                    Cancelar
                            </button>

                            <button 
                                className={styles.delete}
                                onClick={handleDeleteOneComment}
                            >
                                Sim, excluir
                            </button>
                        </footer>
                    </div>
                </div>
            } 
        </>  
    )
}