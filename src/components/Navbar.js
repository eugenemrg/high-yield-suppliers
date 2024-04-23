import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'
import logo from '../images/hys_icon_wide_512.svg'

function Navbar() {

  const linksRef = useRef()

  function toggleHiddenLinks(e) {
    linksRef.current.style.display === "inline-block" ? linksRef.current.style.display = "none" : linksRef.current.style.display = "inline-block"
  }

  function hideLinks(e) {
    linksRef.current.style.display = "none"
  }

  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.logo}><img src={logo} alt="company logo" /></Link>
        <div>
          {pathname === '/' ? <a href="#products">Products</a> : <Link to="/">Home</Link>}
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
        </div>
        <Link to="/contact" className={styles.button}>Contact Us</Link>
      </nav>
      <nav className={styles.navigationsecondary}>
        <Link to="/" className={styles.logo}><img src={logo} alt="company logo" /></Link>
        <span className={styles.togglenav} onClick={toggleHiddenLinks}><i className="fa-solid fa-grip-lines"></i></span>
        <div ref={linksRef} className={styles.secondarylinks} onClick={hideLinks}>
          {pathname === '/' ? <a href="#products">Products</a> : <Link to="/">Home</Link>}
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar