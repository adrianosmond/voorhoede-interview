import React from 'react'
import PostPreview from '../PostPreview'
import './index.css'

const PostList = ({ posts }) => (
  <div className="post-list">
    <h2 className="post-list__heading">Our most recent posts</h2>
    <ul className="post-list__list">
      {posts.map((post, idx) => (
        <li key={idx} className="post-list__item">
          <PostPreview data={post} />
        </li>
      ))}
    </ul>
  </div>
)

export default PostList
