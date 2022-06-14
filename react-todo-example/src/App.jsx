import { useState } from 'react'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import {
  Box,
  Checkbox,
  Grid,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  TextField,
} from '@mui/material'
import './App.css'

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
    // remove item with index "index" from tasks
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App powered by React + Vite + MUI</h2>
      </header>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          marginBottom: '2rem',
        }}
      >
        <List
          subheader={
            <ListSubheader>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1rem',
                  paddingRight: '0',
                }}
              >
                <Box>My tasks</Box>
                <Box>
                  Show complete
                  <Switch onClick={() => handleShowComplete()} />
                </Box>
              </Box>
            </ListSubheader>
          }
        >
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => {
                completeHandler(index)
              }}
              secondaryAction={
                <IconButton
                  aria-label="delete"
                  onClick={() => removeHandler(index)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              }
            >
              <ListItemButton dense>
                <ListItemIcon>
                  <Checkbox
                    checked={task.complete}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={task.task}
                  sx={{
                    textDecoration: task.complete ? 'line-through' : 'none',
                    opacity: task.complete ? '0.6' : '1',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <form onSubmit={submitHandler}>
          <Grid container alignItems={'center'}>
            <Grid item xs={8} padding={4} pr={2}>
              <TextField
                fullWidth
                variant="standard"
                label="Enter new Task"
                id="new-task"
                value={formState}
                onChange={changeHandler}
              />
            </Grid>
            <Grid item xs={4} padding={4} pl={2}>
              <Button fullWidth type="submit" size="large" variant="contained">
                Add Todo
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  )
}

export default App
