import React from 'react'
import PostPreview from '../components/PostPreview'

const HomePage = ({data}) => (
  <div>
    {data.allContentfulBlogPost.edges.map(({ node }, idx) => {
      const postData = {
        url: node.slug,
        title: node.title,
        date: node.date,
        excerpt: node.fields.excerpt
      }
      return <PostPreview key={idx} data={postData} />
    })}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allContentfulBlogPost(sort:{fields:[date], order:DESC}) {
      edges {
        node {
          title
          date
          slug
          fields {
            excerpt
          }
        }
      }
    }
  }
`

export default HomePage
