import React from 'react'
import { Link } from 'react-router-dom'   // make sure you import Link
import './Navbar.css'
import med from '../../assets/med.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h2 id='mg'>
        <img src={med} alt='logo' />
        MediGuide
      </h2>

      <div className='navlinks'>
       <ul>
  <li><Link to="/" className="navlink">Home</Link></li>
  <li><Link to="/about" className="navlink">About Us</Link></li>
  <li><Link to="/appointments" className="navlink">Appointments</Link></li>
  <li><Link to="/contact" className="navlink">Contact</Link></li>
      </ul>
        <button className='signin'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
