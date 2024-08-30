import React from 'react'
import styles from "./AboutUs.module.css"
import BlurBackGroundShape from '../BlurBackgroundShape/BlurBackGroundShape'
const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
        <div className={styles.aboutLeft}> 
        <p>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit. Pariatur molestiae culpa at cumque voluptatum 
             ullam consequuntur mollitia dolorem ratione, asperiores officiis delectus officia error. 
             Laudantium voluptatum eaque aliquid non placeat.
        </p>
    </div>
     <div className={styles.aboutRight}>
        <h1>ABOUT </h1> 
     </div>
      <BlurBackGroundShape/>
    </div>
  )
}

export default AboutUs
