import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <header>
    <nav>
      <Link to="/">{props.title}</Link>
    </nav>
  </header>
)

export default Header