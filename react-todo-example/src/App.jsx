import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const DEFAULT_TASKS = [
  {
    id: 1,
    task: "Finish homework",
    complete: false,
  },
  {
    id: 1,
    task: "Wash dishes",
    complete: false,
  },
  {
    id: 1,
    task: "Clean room",
    complete: false,
  },
  {
    id: 1,
    task: "Make waffles",
    complete: false,
  },
  {
    id: 1,
    task: "Make waffles",
    complete: false,
  },
  {
    id: 1,
    task: "Make waffles",
    complete: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(DEFAULT_TASKS);
  const [formState, setFormState] = useState("");

  const changeHandler = (event) => {
    setFormState(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTask = {
      id: 1,
      task: formState,
      complete: false,
    }
    setTasks([...tasks, newTask])
    setFormState('')
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App powered by React + Vite + MUI</h2>
      </header>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={formState} />
        <button>Add task</button>
      </form>
    </div>
  );
}

export default App;
