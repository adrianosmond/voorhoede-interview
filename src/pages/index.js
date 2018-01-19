import React from 'react'
import PostPreview from '../components/PostPreview'

const HomePage = ({data}) => (
  <div>
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostPreview url={node.fields.slug} title={node.headings[0].value} />
    ))}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
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
