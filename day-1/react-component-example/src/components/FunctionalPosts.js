import { useState } from 'react'

function formatPosts(posts) {
  console.log('posts', posts)
  return posts.map((post, i) => <p key={i}>{post.data}</p>)
}

function Posts() {
  // use React hooks to recreate the component from ClassPosts as a functional component

  return null
}

export default Posts
