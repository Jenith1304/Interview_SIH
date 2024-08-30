import React from 'react'
import styles from './BlurBackGroundShape.module.css'
const BlurBackGroundShape = () => {
  return (
    <div className={styles.blurry_background}>
     <div className={styles.blurry_shape_bottom_right}></div>
    <div className={styles.blurry_shape_top_left}></div>
    </div>
  )
}

export default BlurBackGroundShape
