const path = require('path')
const marked = require('marked')
const striptags = require('striptags')
marked.setOptions({
  smartypants: false
})

// const { createFilePath } = require('gatsby-source-filesystem')

let textNodes = {}

const makeExcerpt = (text) => {
  return striptags(marked(text)).split(' ').slice(0, 25).join(' ') + '...'
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'ContentfulBlogPost') {
    createNodeField({
      node,
      name: 'excerpt',
      value: makeExcerpt(textNodes[node.id].content),
    })
  } else if (node.internal.type === 'contentfulBlogPostContentTextNode') {
    textNodes[node.parent] = node;
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              date
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}