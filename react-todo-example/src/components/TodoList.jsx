import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { ListSubheader, Switch } from '@mui/material'
import { Box } from '@mui/system'

const TodoList = (props) => {
  const { tasks, handleComplete, handleRemove } = props
  const [showComplete, setShowComplete] = useState(false)

  const handleShowComplete = () => {
    setShowComplete(!showComplete)
  }

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            padding={1}
            pr={0}
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
          secondaryAction={
            <IconButton
              aria-label="delete"
              onClick={(e) => handleRemove(index)}
            >
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
          sx={{
            display: !showComplete && task.complete ? 'none' : 'inherit',
          }}
        >
          <ListItemButton
            role={undefined}
            dense
            onClick={(e) => handleComplete(index)}
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
