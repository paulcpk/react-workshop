import { useEffect, useState } from "react";
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
    // callback function for ChatAPI
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    // method to be executed on initialization
    ChatAPI.subscribeToUserStatus(props.id, handleStatusChange);
    // console.log('mount')

    // method to be executed on de-initialization
    return () => {
        // console.log('unmount')
      ChatAPI.unsubscribeFromUserStatus(props.id, handleStatusChange);
    };
  }, []);

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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>useEffect()</h1>
        <button onClick={() => setShowUsers(!showUsers)}>Toggle Users</button>
        {showUsers && (
          <>
            <User id={1} />
            <User id={2} />
            <User id={3} />
          </>
        )}
      </main>
    </div>
  );
}
