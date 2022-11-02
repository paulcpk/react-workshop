import { useEffect, useState } from 'react'
import './App.css'
import * as db from './db.json'

export const COLOR_ICONS = {
  blue: <span role="img">🚙</span>,
  gray: <span role="img">🚓</span>,
  red: <span role="img">🚗</span>,
}

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

  // load mock post data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setTimeout(() => {
      setPosts(db.default)
    }, 1000)
  }, [])

  return (
    <div className="app">
      <h2>
        Memoization with <br />
        useCallback, useMemo &amp; React.memo
      </h2>
      <div className="card">
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.id}>
              {COLOR_ICONS[post.specs.color]} {post.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Unrelated Counter</h2>
        <button onClick={() => setCount((curr) => curr + 1)}>Count +1</button>
        <p>Current counter is {count}</p>
      </div>
    </div>
  )
}

export default App
