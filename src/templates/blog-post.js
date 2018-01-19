import React from "react"
import './prism-twilight.css'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <article dangerouslySetInnerHTML={{ __html: post.html }} />
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;