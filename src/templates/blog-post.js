import React from "react"
import Helmet from 'react-helmet'
import TimeToRead from '../components/TimeToRead'
import './blog-post.css'
import './prism.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="article">
      <Helmet title={post.frontmatter.title} />
      <h1 className="article__title">{post.frontmatter.title}</h1>
      <TimeToRead timeToRead={post.timeToRead} />
      <article className="article__content" dangerouslySetInnerHTML={{ __html: post.html }} />
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