import React from "react"
import Helmet from 'react-helmet'
import TimeToRead from '../components/TimeToRead'
import './prism-twilight.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <TimeToRead timeToRead={post.timeToRead} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      timeToRead
      html
    }
  }
`