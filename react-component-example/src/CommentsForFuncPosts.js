import { useState, useEffect } from "react";

function formatPosts(posts) {
  console.log("posts", posts);
  return posts.map((post, i) => <p key={i}>{post.data}</p>);
}
// reference
fetch("/posts.json")
  .then((response) => response.json())
  .then((posts) => {
    console.log("posts", posts);
    // watch out for curly braces
    setPosts(posts);
  });

function Posts() {
    // this
  const [posts, setPosts] = useState([]);
    // same as this
  const postState = useState([]);
  const posts = postState[0];
  const setPosts = postState[1];
  // use React hooks to recreate the component from ClassPosts as a functional component

  return null;
}

export default Posts;
