import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import * as db from "./db.json";
import PostList, { COLOR_ICONS } from "./PostList";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState(0);

  // load mock post data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setTimeout(() => {
      setPosts(db.default);
    }, 500);
  }, []);

  // we can assume this handlers do more complicated stuff
  // and therefore should not be passed as inline functions
  const resetHandler = () => {
    setExpanded(0);
  };

  const setExpandedHandler = (id) => {
    setExpanded(id);
  };

  // const resetHandler = useCallback(() => {
  //   setExpanded(0);
  // }, []);

  // const setExpandedHandler = useCallback((id) => {
  //   setExpanded(id);
  // }, []);

  const postList = () => {
    console.log("run postList");
    if (!posts.length) {
      return <p>{"Loading..."}</p>;
    }

    return (
      <>
        <button onClick={resetHandler}>Reset expanded details</button>
        <ul className="post-list">
          {posts.map((post) => (
            <li
              key={post.id}
              onClick={() => {
                setExpandedHandler(post.id);
              }}
            >
              {COLOR_ICONS[post.specs.color]} {post.title}
              {post.id === expanded && (
                <ul className="post-spec-list">
                  {Object.keys(post.specs).map((key) => (
                    <li key={post.specs[key]}>
                      {key}: {post.specs[key]}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <p>Car count is {posts.length}</p>
      </>
    );
  };

  return (
    <div className="app">
      <h1>Memoization using useCallback</h1>
      <div className="card">
        {/* {postList()} */}
        <PostList
          posts={posts}
          expanded={expanded}
          resetHandler={resetHandler}
          setExpandedHandler={setExpandedHandler}
        />
      </div>
      <div className="card">
        <h2>Unrelated Counter method</h2>
        <button onClick={() => setCount((curr) => curr + 1)}>Count +1</button>
        <p>Current counter is {count}</p>
      </div>
    </div>
  );
}

export default App;
