import React from 'react'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    // initialized / mounted
    fetch('/posts.json')
      .then((response) => response.json())
      .then((posts) => {
        this.setState({ posts })
      })
  }

  componentDidUpdate() {
    // state updated
  }

  componentWillUnmount() {
    // destroyed / unmounted
  }

  formatPosts(posts) {
    return posts.map((post, i) => <p key={i}>{post.data}</p>)
  }

  render() {
    return this.formatPosts(this.state.posts)
  }
}
