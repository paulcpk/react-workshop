import { useEffect, useLayoutEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import hookStyles from "../../styles/Hooks.module.css";

// Mock implementation for working with real time data
const ChatAPI = {
  subscribeToUserStatus(id, callback) {
    setTimeout(function () {
      callback({ isOnline: true });
      console.log(`User with id: ${id} has successfully subscribed`);
    }, 1000);
  },
  unsubscribeFromUserStatus(id, callback) {
    callback({ isOnline: false });
    console.log(`User with id: ${id} has successfully unsubscribed`);
  },
};

function User(props) {
  const [isOnline, setIsOnline] = useState(null);
  let output = "";

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToUserStatus(props.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromUserStatus(props.id, handleStatusChange);
    };
  }, []);

  if (isOnline === null) {
    return "Loading...";
  }

  output = isOnline ? "Online" : "Offline";

  return (
    <div className={hookStyles.user}>
      🐵 User {props.id}: {output}
    </div>
  );
}

export default function Test() {
  const [name, setName] = useState("World");
  const [showUsers, setShowUsers] = useState(true);

  // use with caution -> might lead to rendering delays
  useLayoutEffect(() => {
    console.log("execute useLayoutEffect()");
    document.title = `Hello, ${name}`;
  });

  useEffect(() => {
    console.log("execute useEffect()");
    document.title = `Bonjour, ${name}`;
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Hello, {name}!</h1>
        <button onClick={() => setName("James")}>
          Click me to change the name
        </button>
        <h2>Subscribe/Unsubscribe</h2>

        {showUsers && (
          <>
            <User id={1} />
            <User id={2} />
            <User id={3} />
          </>
        )}

        <button onClick={() => setShowUsers((previous) => !previous)}>
          Toggle User components
        </button>
      </main>
    </div>
  );
}
