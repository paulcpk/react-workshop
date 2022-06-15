import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";
import useUserStatus from "../../utils/use-user-status";

function User(props) {
  const isOnline = useUserStatus(props.id);
  let output = "";

  if (isOnline === null) {
    output = "Loading...";
  } else {
    output = isOnline ? "Online" : "Offline";
  }

  return (
    <div className={hookStyles.user}>
      🐵 User {props.id}: {output}
    </div>
  );
}

export default function App() {
  const [showUsers, setShowUsers] = useState(true);
  const [debounced, setDebounced] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setDebounced(true);
    }, 500);
  }, []);

  const userProps ={
    id: 1,
    age: 14,
    country: 'de',
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useEffect()</h1>
        <button onClick={() => setShowUsers(!showUsers)}>Toggle Users</button>
        {showUsers && (
          <>
            {/* this: */}
            <User id={1} age={23} country={'ch'} />
            {/* same as:  */}
            <User {...userProps} />

            <User id={2} />
            <User id={3} />
          </>
        )}
        {debounced && (
          <>
            <User id={4} />
            <User id={5} />
            <User id={6} />
          </>
        )}
      </main>
    </div>
  );
}
