import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const DEFAULT_TASKS = [
  {
    id: 1,
    task: 'Finish homework',
    complete: false,
  },
  {
    id: 1,
    task: 'Wash dishes',
    complete: false,
  },
  {
    id: 1,
    task: 'Clean room',
    complete: false,
  },
  {
    id: 1,
    task: 'Make waffles',
    complete: false,
  },
]

function App() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS)

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App powered by React + Vite + MUI</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task.task}</li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
