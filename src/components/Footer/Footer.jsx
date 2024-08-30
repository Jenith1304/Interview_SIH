import React from 'react'
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    < div style={{height:"5vh"}} className={styles.footer}>
      &copy;<span id="year"> 
    </span><span>2024 Your Company Name. All rights reserved.</span>

    </div>
  )
}

export default Footer
