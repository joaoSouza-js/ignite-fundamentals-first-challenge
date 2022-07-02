import "./global/styles.module.css"
import  styles from './app.module.css'

import { Header } from "./components/Header"
import { CreateTask } from "./components/CreateTask"


function App() {

  return (
    <div className="App">
      <Header/>

      <main className={styles.container}>
        <CreateTask/>
      </main>
    </div>
  )
}

export default App
