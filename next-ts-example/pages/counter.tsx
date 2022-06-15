import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

interface ICounter {
  initialCount: number;
  increment: number;
}

function Counter({ initialCount, increment }: ICounter) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h2>Counter</h2>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - increment)}>-{increment}</button>
      <button onClick={() => setCount((prevCount) => prevCount + increment)}>+{increment}</button>
    </>
  );
}

const App: NextPage = () => {
    const router = useRouter()
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          React + TS Counter Example
        </h1>
        <Counter initialCount={42} increment={4} />
      </main>
    </div>
  );
};

export default App;
