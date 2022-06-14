import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
    console.log(`item nr. ${index} was clicked`);
    // set task with index to complete: true
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App powered by React + Vite + MUI</h2>
      </header>
      <ul>
        {tasks.map((task, index) => (
          <li
            style={{ textDecoration: task.complete ? "line-through" : "none" }}
            onClick={() => {
              completeHandler(index)
            }}
            key={index}
          >
            {task.task}
          </li>
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
