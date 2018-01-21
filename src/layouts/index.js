import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './normalize.css'
import './index.css'

const TemplateWrapper = ({ data, children }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div className="site-wrapper">
      <Helmet title={siteTitle} />
      <Header title={siteTitle} />
      <main className="site-body">
        {children()}
      </main>
      <Footer title={siteTitle} />
    </div>
  )
}

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
