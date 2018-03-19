import React from 'react'
import Link from 'gatsby-link'
import logo from './../../logo.png'

const Header = () => (

    <div
      style={{
        margin: '0 auto',
        maxWidth: `60em`,
        padding: '1rem',
        textAlign: `center`
      }}
    >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <img src={logo} width="60" style={{margin:0}}/>
        </Link>
    </div>

)

export default Header
