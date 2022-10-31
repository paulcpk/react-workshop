import { useCallback, useEffect, useState } from "react";
import "./App.css";
import * as db from "./db.json";

const COLOR_ICONS = {
  blue: <span role="img">🚙</span>,
  gray: <span role="img">🚓</span>,
  red: <span role="img">🚗</span>
};

function App() {
  const [posts, setPosts] = useState([]);
  const [expanded, setExpanded] = useState(0);

  // load mock post data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setTimeout(() => {
      setPosts(db.default);
    }, 500);
  }, []);

  const postList = () => {
    console.log("run postList");
    if (!posts.length) {
      return <p>{"Loading..."}</p>;
    }

    return (
      <ul className="post-list">
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => {
              setExpanded(post.id);
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
    );
  };

  return (
    <div className="app">
      <h1>Memoization using useCallback</h1>
      <div className="card">
        <button onClick={() => setExpanded(0)}>Reset expanded details</button>
        {postList()}
        <p>Car count is {posts.length}</p>
      </div>
    </div>
  );
}

export default App;
