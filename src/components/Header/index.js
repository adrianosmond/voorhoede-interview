import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const Header = (props) => (
  <header className="site-header">
    <nav className="site-header__nav">
      <Link to="/" className="site-header__link">
        <svg className="site-header__logo" viewBox="0 0 140 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.561 2.4l4.6 4.6-4.6 4.6 1.4 1.4 6-6-6-6-1.4 1.4z"/>
          <path d="M11.298 8.389l4.6 4.6-4.6 4.6 1.4 1.4 6-6-6-6-1.4 1.4z"/>
          <path d="M8.511 11.6L3.911 7l4.6-4.6-1.4-1.4-6 6 6 6 1.4-1.4z"/>
          <path d="M8.249 17.589l-4.6-4.6 4.6-4.6-1.4-1.4-6 6 6 6 1.4-1.4z"/>
          <text fontWeight="bold" fontSize="16" y="16" x="23">{props.title}</text>
        </svg>
      </Link>
    </nav>
  </header>
)

export default Header