import React from 'react'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    fetch('/posts.json')
      .then((response) => response.json())
      .then((posts) => {
        console.log('posts', posts)
        this.setState({ posts })
      })
  }

  formatPosts(posts) {
    console.log('posts', posts)
    return posts.map((post, i) => <p key={i}>{post.data}</p>)
  }

  render() {
    return this.formatPosts(this.state.posts)
  }
}
