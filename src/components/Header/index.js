import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const Header = (props) => (
  <header className="site-header">
    <nav>
      <Link to="/" className="site-header__link">{props.title}</Link>
    </nav>
  </header>
)

export default Header