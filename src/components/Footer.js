import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.head}>High Yield Suppliers</p>
        <p>Bogani East Road, Karen<br />P.O. Box 25071-00100<br />NAIROBI, KENYA</p>
      </div>
      <div>
        <p className={styles.title}>Links</p>
        <div>
          <Link to="/">Home</Link>
          <Link to="/#products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
      <div>
        <p className={styles.title}>Contacts</p>
        <div className='call'>
          <a href="tel:+254722678529">0722 678 529</a>
          <a href="tel:+254737678529">0737 678 529</a>
        </div>
        <div>
          <br/>
          <a href="mailto:highyieldsuppliers@gmail.com">email: highyieldsuppliers@gmail.com</a>
        </div>
      </div>
      <div>
        <p>Designed by Anonymous</p>
        <br/>
        <p>Copyright (c) 2024 </p>
      </div>
    </footer>
  )
}

export default Footer