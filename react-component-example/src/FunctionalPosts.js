import { useState, useEffect } from 'react'

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // initialized / mounted
    fetch('/posts.json')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts)
      })
  }, [])

  const renderedPosts = posts.map((post, i) => <p key={i}>{post.data}</p>);

  return (
      <>
        {posts.map((post, i) => <p key={i}>{post.data}</p>)}
        <button onClick={() => console.log('click me')}>Double Posts</button>
      </>
  );
}

export default Posts
