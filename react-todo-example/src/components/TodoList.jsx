import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import {
  Box,
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
} from '@mui/material'

const TodoList = (props) => {
  const { tasks, completeHandler, removeHandler } = props

  const [showComplete, setShowComplete] = useState(false)

  const showCompleteHandler = () => {
    setShowComplete(!showComplete)
  }

  return (
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
              <Switch onClick={() => showCompleteHandler()} />
            </Box>
          </Box>
        </ListSubheader>
      }
    >
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          sx={{
            display: !showComplete && task.complete ? 'none' : 'inherit',
          }}
          disablePadding
          secondaryAction={
            <IconButton
              aria-label="delete"
              onClick={(e) => removeHandler(index)}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
        >
          <ListItemButton
            onClick={() => {
              completeHandler(index)
            }}
            dense
          >
            <ListItemIcon>
              <Checkbox checked={task.complete} tabIndex={-1} disableRipple />
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
  )
}

export default TodoList
