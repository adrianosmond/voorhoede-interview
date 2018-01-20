module.exports = {
  siteMetadata: {
    title: 'Front End Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `debpfxdllzms`,
        accessToken: `16b5812fdaadb760679a452a6a4570f035f7a7f1521a67f28c8f81efb89af88e`,
      },
    },
  ],
};
