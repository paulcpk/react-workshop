import { useCallback, useEffect, useState } from "react";
import "./App.css";

const BASE_COUNT = 10;

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(BASE_COUNT);

  // load post data on initialization
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res.splice(0, count)));
  }, [count]);

  const postList = () => {
    console.log('run postList');
    if (!posts) {
      return 'Loading ...';
    }

    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }

  const buttonHandle = (increase) => {
    console.log('run buttonHandle');
    let newCount = increase ? count + BASE_COUNT : count - BASE_COUNT;
    // If count is smaller than 10, decrease no more
    if (newCount < BASE_COUNT) {
      newCount = BASE_COUNT;
    }
    setCount(newCount);
  }

  return (
    <div className="App">
      <h1>Memoization using useCallback</h1>
      <div className="card">
        <button onClick={() => buttonHandle(true)}>
          Increase post count by 10
        </button>
        <button onClick={() => buttonHandle(false)}>
          Decrease post count by 10
        </button>
        <p>
        Post count is {posts.length}
        </p>
      </div>
      <div className="class">{postList()}</div>
    </div>
  );
}

export default App;
