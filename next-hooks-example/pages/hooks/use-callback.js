import Head from "next/head";
import { useState, useEffect, useReducer } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useCallback()</h1>
      </main>
    </div>
  );
}
