import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <header>
        <a href='/' className='logo'>
            <p>Desmond Afari</p>
            <small>DEVELOPER</small>
        </a>
        <nav>
          <a href="/">ABOUT</a>
          <a href="/">CONTACT</a>
          <a href="/">WORK</a>
      </nav> 
    </header>
  )
}

export default Header