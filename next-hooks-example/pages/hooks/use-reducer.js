import Head from "next/head";
import { useState, useEffect, useReducer } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

const initialState = { count: 42, fontSize: 16, highlight: false };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "larger":
      return { ...state, fontSize: state.fontSize + 2 };
    case "smaller":
      return { ...state, fontSize: state.fontSize - 2 };
    case "toggleHighlight":
      return { ...state, highlight: !state.highlight };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const { highlight, count, fontSize } = state;

  const highlightStyle = highlight
    ? {
        color: "red",
        fontWeight: "bold",
        border: "2px solid red",
        padding: "0.5rem",
      }
    : {};

  return (
    <div className={hookStyles.counter}>
      <span
        style={{
          fontSize: `${fontSize}px`,
          marginBottom: "1rem",
          ...highlightStyle,
        }}
      >
        Count: {count}
      </span>
      <button onClick={() => dispatch({ type: "toggleHighlight" })}>
        Toggle highlight
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>Count + 1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Count - 1</button>
      <button onClick={() => dispatch({ type: "larger" })}>Fontsize + 2</button>
      <button onClick={() => dispatch({ type: "smaller" })}>
        Fontsize - 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
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
        <h1>useReducer()</h1>
        <Counter initialCount={42} />
      </main>
    </div>
  );
}
