import { useEffect, useState } from "react";
import { ChatAPI } from "./chat-api";

// custom hook for checking user status
export default function useUserStatus(id) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // callback function for ChatAPI
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    // method to be executed on initialization
    ChatAPI.subscribeToUserStatus(id, handleStatusChange);
    // console.log('mount')

    // method to be executed on de-initialization
    return () => {
      // console.log('unmount')
      ChatAPI.unsubscribeFromUserStatus(id, handleStatusChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isOnline;
}
