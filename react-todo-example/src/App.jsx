import './App.css'
import { useState, useRef } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Container, Paper, Stack } from '@mui/material'

const darkTheme = createTheme({ palette: { mode: 'dark' } })
const lightTheme = createTheme({ palette: { mode: 'light' } })

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

const DEFAULT_ID = 42

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}))

const App = () => {
  const [tasks, setTasks] = useState(DEFAULT_TASKS)
  const [formInput, setFormInput] = useState('')
  const taskId = useRef(DEFAULT_ID)


  const handleChange = (e) => {
    setFormInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formInput !== '') {
      const newTask = {
        id: taskId,
        task: formInput,
        complete: false,
      }
      // increment taskId
      taskId.current++
      setTasks([...tasks, newTask])
      setFormInput('')
    }
  }

  const handleComplete = (index) => {
    const newTasks = [...tasks]
    if (newTasks[index].complete === false) {
      newTasks[index].complete = true
    } else {
      newTasks[index].complete = false
    }
    setTasks(newTasks)
    console.log(newTasks)
  }

  const handleRemove = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }


  return (
    <div className="app">
      <ThemeProvider theme={lightTheme}>
        <Container maxWidth="sm">
          <header className="app-header">
            <h2>Todo app powered by React + Vite + MUI</h2>
          </header>
          <Box
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            <TodoList
              tasks={tasks}
              handleComplete={handleComplete}
              handleRemove={handleRemove}
            />

            <TodoForm
              formInput={formInput}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
