import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logo}>HYS</Link>
      <div>
        {pathname === '/' ? <a href="#products">Products</a> : <Link to="/">Home</Link>}
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
      <Link to="/contact" className={styles.button}>Contact Us</Link>
    </nav>
  )
}

export default Navbar