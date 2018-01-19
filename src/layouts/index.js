import React from 'react'

import Header from '../components/Header'
import './normalize.css'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <div>
      {children()}
    </div>
  </div>
)


export default TemplateWrapper
