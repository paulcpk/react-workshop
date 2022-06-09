import "./App.css";
import { useState, useRef } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { lightGreen } from "@mui/material/colors";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const DEFAULT_TASKS = [
  {
    id: 1,
    task: "Finish homework",
    completed: false,
  },
  {
    id: 1,
    task: "Wash dishes",
    completed: false,
  },
  {
    id: 1,
    task: "Clean room",
    completed: false,
  },
  {
    id: 1,
    task: "Make waffles",
    completed: false,
  },
];

const DEFAULT_ID = 42;

const App = () => {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [formInput, setFormInput] = useState("");
  const taskId = useRef(DEFAULT_ID);

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput !== "") {
      const newTask = {
        id: taskId,
        task: formInput,
        completed: false,
      };
      console.log(newTask);
      // increment taskId
      taskId.current++;
      setTasks([...tasks, newTask]);
      setFormInput("");
    }
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].completed === false) {
      newTasks[index].completed = true;
    } else {
      newTasks[index].completed = false;
    }
    setTasks(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleRemoveAll = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      {/* <ThemeProvider theme={darkTheme}>
        <Container maxWidth="sm"> */}
      <header className="app-header">
        <h2>Todo app powered by React + Vite</h2>
      </header>
      <TodoList
        tasks={tasks}
        handleComplete={handleComplete}
        handleRemove={handleRemove}
        handleRemoveAll={handleRemoveAll}
      />
      <TodoForm
        formInput={formInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* </Container>
      </ThemeProvider> */}
    </div>
  );
};

export default App;
