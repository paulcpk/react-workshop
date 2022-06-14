import { useState } from "react";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./App.css";
import { Box } from "@mui/material";

const DEFAULT_TASKS = [
  {
    task: "Finish homework",
    complete: false,
  },
  {
    task: "Wash dishes",
    complete: false,
  },
  {
    task: "Clean room",
    complete: true,
  },
  {
    task: "Make waffles",
    complete: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [formState, setFormState] = useState("");

  const changeHandler = (event) => {
    setFormState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      task: formState,
      complete: false,
    };

    setTasks([...tasks, newTask]);
    setFormState("");
  };

  const completeHandler = (index) => {
    const newTasks = [...tasks];
    newTasks[index].complete = !newTasks[index].complete;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App powered by React + Vite + MUI</h2>
      </header>
      <Box
        sx={{
          backgroundColor: "background.paper",
        }}
      >
        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              sx={{ textDecoration: task.complete ? "line-through" : "none" }}
              onClick={() => {
                completeHandler(index);
              }}
            >
              {task.task}
            </ListItem>
          ))}
        </List>
      </Box>

      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={formState} />
        <Button variant="contained">Add task</Button>
      </form>
    </div>
  );
}

export default App;
