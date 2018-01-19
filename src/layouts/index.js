import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './normalize.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Front End Blog" />
    <Header />
    <main className="site-body">
      {children()}
    </main>
  </div>
)

export default TemplateWrapper
