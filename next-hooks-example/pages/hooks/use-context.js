import { createContext, useContext, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// Can we write a toggle for this?
const ThemeContext = createContext(themes);

function ThemedButton({ clickHandler }) {
  //   const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <button
          style={{
            background: theme.background,
            color: theme.foreground,
            marginBottom: "1rem",
          }}
          onClick={() => clickHandler()}
        >
          I am styled by theme context!
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

function ThemedNav() {
  const theme = useContext(ThemeContext);
  return (
    <nav
      className={hookStyles.nav}
      style={{
        background: theme.background,
        color: theme.foreground,
        marginBottom: "1rem",
      }}
    >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Docs</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Toolbar(props) {
  const [lightMode, setLightMode] = useState(true);

  const clickHandler = () => setLightMode(!lightMode);

  return (
    <ThemeContext.Provider value={lightMode ? themes.light : themes.dark}>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={clickHandler}
      >
        Toggle Theme
      </button>
      <ThemedButton clickHandler={clickHandler} />
      <ThemedNav />
    </ThemeContext.Provider>
  );
}

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useContext()</h1>
        <Toolbar />
      </main>
    </div>
  );
}
