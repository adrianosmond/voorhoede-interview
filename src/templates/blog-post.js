import React, { Component } from "react"
import Helmet from 'react-helmet'
import marked from 'marked'
import Prism from 'prismjs'
import TimeToRead from '../components/TimeToRead'
import './blog-post.css'
import './prism.css'

const readingTime = (text) => {
  return Math.round(text.length / 2000)
}

class BlogPost extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render () {
    const post = this.props.data.allContentfulBlogPost.edges[0].node;
    return (
      <div className="article">
        <Helmet title={post.title} />
        <h1 className="article__title">{post.title}</h1>
        <TimeToRead timeToRead={readingTime(post.content.content)} />
        <article className="article__content" dangerouslySetInnerHTML={{ __html: marked(post.content.content) }} />
      </div>
    )
  }
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    allContentfulBlogPost(filter:{slug:{eq:$slug}}) {
      edges {
        node {
          title
          date
          content {
            content
          }
        }
      }
    }
  }
`