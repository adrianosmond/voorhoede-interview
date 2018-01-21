import React from 'react'
import Link from 'gatsby-link'
import fecha from 'fecha'
import { DATE_FORMAT } from '../../globals/constants'
import './index.css'

const PostPreview = ({data}) => (
  <Link to={data.url} className="post-preview">
    <span className="post-preview__metadata">{fecha.format(new Date(data.date), DATE_FORMAT )}</span>
    <h3 className="post-preview__title">{data.title}</h3>
    <p className="post-preview__excerpt" dangerouslySetInnerHTML={{ __html: data.excerpt }} />
  </Link>
)
export default PostPreview;