import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className="logo" />
    </div>
  )
}

export default Navbar