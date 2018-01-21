import React from 'react'
import PostList from '../components/PostList'

const HomePage = ({data}) => {
  const recentPosts = data.allContentfulBlogPost.edges.map(({ node }) => ({
    url: node.slug,
    title: node.title,
    date: node.date,
    excerpt: node.fields.excerpt
  }))

  return (
    <div>
      <h1 className="site-heading">Hello!</h1>
      <p className="site-intro">
        Welcome to {data.site.siteMetadata.title}, where we'll show you how to become
        a better front end developer. We regularly write posts to help you level up your 
        skills by learning that new tech you've been wanting to look at, or improving on 
        what you already know.
      </p>
      <PostList posts={recentPosts} />
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
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
