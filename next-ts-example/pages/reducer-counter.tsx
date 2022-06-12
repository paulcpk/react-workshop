import React, { useReducer } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

interface IState {
    count: number;
    fontSize: number;
    highlight: boolean;
}

export interface IAction {
    type: string
  }

const initialState: IState = { count: 42, fontSize: 16, highlight: false };

function reducer(state: IState, action: IAction) {
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

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const highlightStyle = state.highlight
    ? {
        color: "red",
        fontWeight: "bold",
        border: "2px solid red",
        padding: "0.5rem",
      }
    : {};

  return (
    <>
      <span
        style={{
          fontSize: `${state.fontSize}px`,
          marginBottom: "1rem",
          ...highlightStyle,
        }}
      >
        Count: {state.count}
      </span>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Count -1
      </button>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        Count +1
      </button>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => dispatch({ type: "larger" })}
      >
        FontSize +2
      </button>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => dispatch({ type: "smaller" })}
      >
        FontSize -2
      </button>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => dispatch({ type: "toggleHighlight" })}
      >
        Toggle Highlight
      </button>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

const App: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>useReducer()</h1>
        <Counter />
      </main>
    </div>
  );
}

export default App;
