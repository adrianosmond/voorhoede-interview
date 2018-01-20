import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './normalize.css'
import './index.css'

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Header title={data.site.siteMetadata.title} />
    <main className="site-body">
      {children()}
    </main>
  </div>
)

export const query = graphql`
  query TitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
