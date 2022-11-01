import { memo, useCallback, useMemo, useState } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

const DefaultTodos = ({ todos, addTodo }) => {
  console.log("DefaultTodos render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

const Todos = memo(DefaultTodos);

const TodoList = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // this function is recreated on every render of TodoList
  // renders are triggered by the state manipulation -> setTodos
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // Now this function is only reinitialized when 'todos' changes
  //   const addTodo = useCallback(() => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useCallback()</h1>
        <TodoList />
      </main>
    </div>
  );
}
