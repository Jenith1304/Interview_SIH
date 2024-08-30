import React from 'react'
import styles from "./Guidelines.module.css"
import BlurBackGroundShape from '../BlurBackgroundShape/BlurBackGroundShape'
const Guidelines = () => {
  return (
    <div>
      <div className={styles.guidelinesContainer}>
     <div className={styles.guidelinesLeft}> 
     <h1>Guidelines</h1> 
    </div>
     <div className={styles.guidelinesRight}>
       <ol>
        <li>Check Your Technology: Ensure your internet connection, microphone, and camera are working properly before the interview.</li>
        <li>Choose a Quiet, Well-Lit Location: Select a quiet space with good lighting where you won’t be interrupted.</li>
        <li>Stay Focused and Engaged: Listen carefully, avoid distractions, and stay attentive throughout the interview.</li>
        <li>Be On Time: Log in 5-10 minutes early to avoid any last-minute technical issues.</li>
        <li>Dress Professionally: Wear appropriate attire as you would for an in-person interview.</li>
        </ol>
     </div>
     <BlurBackGroundShape/>
    </div>
    </div>
  )
}

export default Guidelines
