import Head from "next/head";
import { useState, useEffect, useReducer, memo, useMemo } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

// function MyComponent(props) {
//   console.log("props", props);
//   return <p>Hello, from MyComponent. The count is {props.count}</p>;
// }

const MyComponent = memo(function MyComponent(props) {
  console.log("props", props);
  return <p>Hello, from MyComponent. The count is {props.count}</p>;
});

// cpu intensive work
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log("Done...");
  return num;
};

const DefaultTodos = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <MyComponent count={count} />
        <h2>My Todos</h2>

        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment} style={{ marginLeft: "1rem" }}>
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useMemo()</h1>
        <DefaultTodos />
      </main>
    </div>
  );
}
