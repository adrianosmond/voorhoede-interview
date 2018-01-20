import React from 'react'
import PostPreview from '../components/PostPreview'

const HomePage = ({data}) => (
  <div>
    {data.allMarkdownRemark.edges.map(({ node }, idx) => {
      const postData = {
        url: node.fields.slug,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        excerpt: node.excerpt,
      }
      return <PostPreview key={idx} data={postData} />
    })}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort:{fields: [frontmatter___date], order:DESC}) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default HomePage
