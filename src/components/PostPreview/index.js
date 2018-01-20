import React from 'react'
import Link from 'gatsby-link'
import fecha from 'fecha'
import './index.css'

const PostPreview = ({data}) => (
  <Link to={data.url} className="post-preview">
    <h3 className="post-preview__title">{data.title}</h3>
    <span className="post-preview__metadata">Written on {fecha.format(new Date(data.date), 'dddd MMMM Do, YYYY')}</span>
    <p className="post-preview__excerpt" dangerouslySetInnerHTML={{ __html: data.excerpt }} />
  </Link>
)
export default PostPreview;