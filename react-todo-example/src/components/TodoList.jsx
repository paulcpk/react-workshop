import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import SettingsIcon from '@mui/icons-material/Settings'
import { ListSubheader, Switch } from '@mui/material'
import { Box } from '@mui/system'

const TodoList = (props) => {
  const { tasks, handleComplete, handleRemove, handleRemoveAll } = props

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      subheader={
        <ListSubheader>
          <Box display={'flex'} justifyContent={'space-between'} padding={1} pr={0}>
            <Box>My tasks</Box>
            <Box>
              Show completed
              <Switch />
            </Box>
          </Box>
        </ListSubheader>
      }
    >
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton aria-label="delete">
              <DeleteForeverIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText primary={task.task} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

export default TodoList
