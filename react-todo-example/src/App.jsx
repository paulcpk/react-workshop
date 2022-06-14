import { useState } from 'react'

import { Box, Container, Switch } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const darkTheme = createTheme({ palette: { mode: 'dark' } })
const lightTheme = createTheme({ palette: { mode: 'light' } })

const DEFAULT_TASKS = [
  {
    task: 'Finish homework',
    complete: false,
  },
  {
    task: 'Wash dishes',
    complete: false,
  },
  {
    task: 'Clean room',
    complete: true,
  },
  {
    task: 'Make waffles',
    complete: false,
  },
]

function App() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS)
  const [formState, setFormState] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const changeHandler = (event) => {
    setFormState(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const newTask = {
      task: formState,
      complete: false,
    }

    setTasks([...tasks, newTask])
    setFormState('')
  }

  const completeHandler = (index) => {
    const newTasks = [...tasks]
    newTasks[index].complete = !newTasks[index].complete
    setTasks(newTasks)
  }

  const removeHandler = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container maxWidth="sm">
          <header className="App-header">
            <h2>Todo App powered by React + Vite + MUI</h2>
            <Box>
              Light / Darkmode
              <Switch onClick={() => setDarkMode(!darkMode)} />
            </Box>
          </header>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              marginBottom: '2rem',
            }}
          >
            <TodoList
              tasks={tasks}
              completeHandler={completeHandler}
              removeHandler={removeHandler}
            />
            <TodoForm
              formState={formState}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
