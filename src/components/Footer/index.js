import React from 'react'
import './index.css'

const Footer = (props) => (
  <footer className="site-footer">
    <div className="site-footer__content">
      <small className="site-footer__copyright">Copyright &copy; 2018, {props.title}</small>
      <a className="site-footer__attribution" href="https://www.contentful.com/" rel="nofollow" target="_blank">
        <img src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" style={{width:'100px'}} alt="Powered by Contentful" />
      </a>
    </div>
  </footer>
)

export default Footer



