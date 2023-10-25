import React from 'react'
import "../style/Navbar.scss"
import Logo from "../image/Logo.svg"
const Navbar = () => {
  return (
    <nav>
        <img src={Logo} alt="" />
        <ul>
          <li>bar-1</li>
          <li>bar-2</li>
          <li>bar-3</li>
          <li>bar-4</li>
          <li>bar-5</li>
        </ul>
 
    </nav>
  )
}

export default Navbar