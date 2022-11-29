import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import * as db from './db.json'
import PostList, { COLOR_ICONS } from './PostList'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])
  const [expanded, setExpanded] = useState(0)
  // dummy state hooks
  const [foo, setFoo] = useState(0)

  // load mock post data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setTimeout(() => {
      setPosts(db.default)
    }, 500)
  }, [])

  useEffect(() => {
    // updating the state triggers a re-render
    // let's assume we're doing a useful manipulation here
    setFoo(count)
    console.log('foo', foo)
  }, [count, foo])

  // we can assume this handlers do more complicated stuff
  // and therefore should not be passed as inline functions
  const resetHandler = () => {
    setExpanded(0)
  }

  const setExpandedHandler = (id) => {
    setExpanded(id)
  }

  // const resetHandler = useCallback(() => {
  //   setExpanded(0);
  // }, []);

  // const setExpandedHandler = useCallback((id) => {
  //   setExpanded(id);
  // }, []);

  // this isn't re-rendered, but re-initialized on every state change
  const postList = () => {
    console.log('run postList method')
    if (!posts.length) {
      return <p>{'Loading...'}</p>
    }

    return (
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id}>
            {COLOR_ICONS[post.specs.color]} {post.title}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="app">
      <h1>
        Memoization with <br />
        useCallback &amp; React.memo
      </h1>
      <div className="card">
        {postList()}
        {/* <PostList
          posts={posts}
          expanded={expanded}
          resetHandler={resetHandler}
          setExpandedHandler={setExpandedHandler}
        /> */}
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
