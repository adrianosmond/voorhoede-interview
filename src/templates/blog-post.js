import React from "react"
import Helmet from 'react-helmet'
import './prism-twilight.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Helmet title={post.headings[0].value} />
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings(depth:h1) {
        value
      }
    }
  }
`