import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const TodoForm = (props) => {
  const { formInput, handleChange, handleSubmit } = props

  return (
    <form className="form-input" onSubmit={handleSubmit}>
      <Grid container alignItems={'center'}>
        <Grid item xs={8} padding={4} pr={2}>
          <TextField
            fullWidth
            variant="standard"
            label="Enter new Task"
            id="new-task"
            value={formInput}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4} padding={4} pl={2}>
          <Button fullWidth type="submit" size="large" variant="contained">
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default TodoForm
