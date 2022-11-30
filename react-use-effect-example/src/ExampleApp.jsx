import { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'

// Mock implementation for working with real time data
const ChatAPI = {
  subscribeToUserStatus(id, callback) {
    setTimeout(function () {
      callback({ isOnline: true })
      console.log(`User with id: ${id} has successfully subscribed`)
    }, 1000)
  },
  unsubscribeFromUserStatus(id, callback) {
    callback({ isOnline: false })
    console.log(`User with id: ${id} has successfully unsubscribed`)
  },
}

const User = ({ id }) => {
  const [isOnline, setIsOnline] = useState(null)
  let output = ''

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToUserStatus(id, handleStatusChange)

    return () => {
      ChatAPI.unsubscribeFromUserStatus(id, handleStatusChange)
    }
  }, [id])

  if (isOnline === null) {
    output = 'Loading...'
  } else {
    output = isOnline ? 'Online' : 'Offline'
  }

  return (
    <div className="user">
      🐵 User {id}: {output}
    </div>
  )
}

const TodoList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((result) => {
        setData(result.data.slice(0, 10))
      })
      .catch(console.error)
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.title}
          </span>
        </li>
      ))}
    </ul>
  )
}

const ExampleApp = () => {
  const [name, setName] = useState('World')
  const [showUsers, setShowUsers] = useState(true)
  const [count, setCount] = useState(4)

  // use with caution -> might lead to rendering delays
  // useLayoutEffect(() => {
  //   console.log("execute useLayoutEffect()");
  //   document.title = `Hello, ${name}`;
  // });

  useEffect(() => {
    console.log('execute useEffect()')
    document.title = `Bonjour, ${name}`
  }, [name, count])

  return (
    <div className="app">
      {console.log('Render ExampleApp.jsx')}
      <div className="card">
        <h1>Hello, {name}!</h1>
        <button onClick={() => setName('James')}>
          Click me to change the name
        </button>
      </div>

      <div className="card">
        <h2>Todo List API call</h2>
        <TodoList />
      </div>

      <div className="card">
        <h2>Subscribe/Unsubscribe</h2>

        {showUsers && (
          <>
            <User id={1} />
            <User id={2} />
            <User id={3} />
          </>
        )}

        <button onClick={() => setCount(count + 1)}>
          Increment last user id {count}
        </button>

        <button onClick={() => setShowUsers((previous) => !previous)}>
          Toggle User components
        </button>
      </div>
    </div>
  )
}

export default ExampleApp
