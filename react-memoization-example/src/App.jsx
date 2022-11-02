import { useCallback, useMemo } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import * as db from './db.json'
import PostList from './PostList'

export const COLOR_ICONS = {
  blue: <span role="img">🚙</span>,
  gray: <span role="img">🚓</span>,
  red: <span role="img">🚗</span>,
}

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])
  const [expanded, setExpanded] = useState(0)

  // load mock post data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setTimeout(() => {
      setPosts(db.default)
    }, 1000)
  }, [])

  // we can assume this handlers do more complicated stuff
  // and therefore should not be passed as inline functions
  const resetHandler = useCallback(() => {
    setExpanded(0)
  }, [])

  const setExpandedHandler = useCallback((id) => {
    setExpanded(id)
  }, [])

  return (
    <div className="app">
      <h2>
        Memoization with <br />
        useCallback, useMemo &amp; React.memo
      </h2>
      <div className="card">
        <PostList
          posts={posts}
          expanded={expanded}
          resetHandler={resetHandler}
          setExpandedHandler={setExpandedHandler}
        />
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
