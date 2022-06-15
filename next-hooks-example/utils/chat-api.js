// Mock implementation for working with real time data
export const ChatAPI = {
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