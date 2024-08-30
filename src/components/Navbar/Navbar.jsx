import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLogo}>
        <div><img src="/images/logo.png" alt="Logo" /></div>
        <h2>Interview</h2>
      </div>
      <div className={styles.navList}>
        <ul>
            <li className={styles.active}>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className={styles.navLogin}><button>Login</button></div>
    </div>
  )
}

export default Navbar
