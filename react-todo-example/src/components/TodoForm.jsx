import Button from '@mui/material/Button'

import { Grid, TextField } from '@mui/material'

const TodoForm = (props) => {
  const { formState, changeHandler, submitHandler } = props

  return (
    <form className="form-input" onSubmit={submitHandler}>
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
  )
}

export default TodoForm
