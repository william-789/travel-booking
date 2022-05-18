import React from 'react'
import { FaMapMarker, FaSearch } from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <FaMapMarker size={24}/>
            <h1>Logo</h1>
        </div>
        <div>
            <FaSearch size={24}/>
        </div>
    </nav>
  )
}

export default Navbar