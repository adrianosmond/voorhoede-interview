import React from 'react'
import './index.css'

import Link from 'gatsby-link'

const PostPreview = (props) => (
  <Link to={props.url} className="post-preview">
    {props.title}
  </Link>
)
export default PostPreview;