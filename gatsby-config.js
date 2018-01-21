module.exports = {
  siteMetadata: {
    title: 'Code Block',
    description: 'Giving you the information you need to become the best front end developer you can be.',
    siteUrl: 'https://voorhoede-interview-aosmond.netlify.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'debpfxdllzms',
        accessToken: '16b5812fdaadb760679a452a6a4570f035f7a7f1521a67f28c8f81efb89af88e',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(({ node }) => {
                return Object.assign({}, {
                  title: node.title,
                  date: node.date,
                  description: node.fields.excerpt,
                  url: site.siteMetadata.siteUrl + node.slug
                });
              });
            },
            query: `
              {
                allContentfulBlogPost(
                  limit: 1000,
                  sort: { fields:[date], order:DESC }
                ) {
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
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
  ],
};
