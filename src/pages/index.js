import React from 'react'
import PostPreview from '../components/PostPreview'

const HomePage = ({data}) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }, idx) => (
      <PostPreview key={idx} url={node.fields.slug} title={node.headings[0].value} />
    ))}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          headings(depth:h1) {
            value
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default HomePage
