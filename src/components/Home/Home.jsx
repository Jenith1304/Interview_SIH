import React from 'react'
import styles from "./Home.module.css"
import BlurBackGroundShape from '../BlurBackgroundShape/BlurBackGroundShape'
const Home = () => {
  return (
    <div className={styles.homeContainer}>
     <div className={styles.homeLeft}> 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores 
        reprehenderit impedit voluptates saepe id laudantium sed suscipit ad ea exercitationem 
        </p>
    </div>
     <div className={styles.homeRight}>
        <h1>OPTIMIZING <br /> THE<br/> HIRING</h1> 
     </div>
     <BlurBackGroundShape/>
    </div>
  )
}

export default Home
