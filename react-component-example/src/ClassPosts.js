import React from 'react'

function MyFunc1() {
    //noop

    // some logic..
    return null
}

// always returns by default
const MyFunc2 = () => null

const MyFunc3 = () => {
    //noop

    // some logic..
    return null
}


export default class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // probably expecting some posts here
            posts: []
        }
    }

    componentDidMount() {
        // initialized
        fetch('/posts.json')
            .then((response) => response.json())
            .then((posts) => {
                console.log('posts', posts);
                // this.setState({ posts: posts })
                this.setState({ posts: posts })
            })
    }

    formatPosts(posts) {
        return posts.map((post, index) => <p key={index}>{post.data}</p>)
    }

    render() {
        return <>
        {this.formatPosts(this.state.posts)}
        </>
    }
}