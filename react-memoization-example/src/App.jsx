import { useCallback, useEffect, useState } from "react";
import "./App.css";
import * as db from "./db.json";

const SELECT_DEFAULT_VALUE = "default";

const COLOR_ICONS = {
  blue: <span role="img">🚙</span>,
  gray: <span role="img">🚓</span>,
  red: <span role="img">🚗</span>
};

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(SELECT_DEFAULT_VALUE);
  const [expanded, setExpanded] = useState(0);

  // load mock post data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setPosts(db.default);
  }, []);

  const postSpecList = (specs) => {
    return (
      <ul className="post-spec-list">
        {Object.keys(specs).map((key) => (
          <li key={specs[key]}>
            {key}: {specs[key]}
          </li>
        ))}
      </ul>
    );
  };

  const postList = useCallback(() => {
    console.log("run postList");
    if (!posts) {
      return "Loading...";
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
            {post.id === expanded && postSpecList(post.specs)}
          </li>
        ))}
      </ul>
    );
  }, [posts, expanded]);

  const renderSelect = useCallback(() => {
    console.log("run renderSelect");
    if (!posts) {
      return "Loading...";
    }

    return (
      <select
        name="cars"
        id="cars"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option key="default" value={SELECT_DEFAULT_VALUE}>
          Pick a color
        </option>
        {Object.keys(COLOR_ICONS).map((color) => (
          <option key={color} value={color}>
            {color.toUpperCase()}
          </option>
        ))}
      </select>
    );
  });

  return (
    <div className="app">
      <h1>Memoization using useCallback</h1>
      <div className="card">
        {renderSelect()}
        <button onClick={() => setFilter(SELECT_DEFAULT_VALUE)}>
          Reset filter
        </button>
        {filter && <p>Post filter is set to {filter}</p>}
      </div>
      <div className="card">
        <button onClick={() => setExpanded(0)}>
          Reset expanded details
        </button>
        {postList()}
        <p>Car count is {posts.length}</p>
      </div>
    </div>
  );
}

export default App;
