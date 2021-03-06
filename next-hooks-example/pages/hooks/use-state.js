import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <h2>Counter</h2>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

function someExpensiveComputation(count) {
  console.log("run someExpensiveComputation");
  return count * 2;
}

function ExpensiveCounter({ initialCount }) {
  // lazy initialization
  // initialCount will default to return value of someExpensiveComputation on initialization
  const [count, setCount] = useState(() => {
    const initialState = someExpensiveComputation(initialCount);
    return initialState;
  });

  useEffect(() => {
    console.log("count changed", count);
  }, [count]);

  return (
    <>
      <h2>ExpensiveCounter</h2>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>useState()</h1>
        <Counter className={hookStyles.counter} initialCount={42} />
        <ExpensiveCounter className={styles.container} initialCount={42} />
      </main>
    </div>
  );
}
