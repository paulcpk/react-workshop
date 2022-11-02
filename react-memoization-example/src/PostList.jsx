import { memo } from 'react'
import { COLOR_ICONS } from './App'

const PostList = ({ posts, expanded, resetHandler, setExpandedHandler }) => {
  console.log('run postList method')

  if (!posts.length) {
    return <p>{'Loading...'}</p>
  }

  return (
    <>
      <button onClick={resetHandler}>Reset expanded details</button>
      <ul className="post-list">
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => {
              setExpandedHandler(post.id)
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
    </>
  )
}

export default memo(PostList)
