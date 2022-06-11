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

// custom hook for checking user status
function useUserStatus(id) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToUserStatus(id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromUserStatus(id, handleStatusChange);
    };
  }, []);

  return isOnline;
}

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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Custom Hook</h1>
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
