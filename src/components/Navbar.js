import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logo}>HYS</Link>
      <div>
        <Link to="/#products">Products</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
      <Link to="/contact" className={styles.button}>Contact Us</Link>
    </nav>
  )
}

export default Navbar