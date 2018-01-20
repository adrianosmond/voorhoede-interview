import React from 'react'
import './index.css'

import Link from 'gatsby-link'

const PostPreview = ({data}) => (
  <Link to={data.url} className="post-preview">
    {data.title} - {data.date}
    <p>{data.excerpt}</p>
  </Link>
)
export default PostPreview;