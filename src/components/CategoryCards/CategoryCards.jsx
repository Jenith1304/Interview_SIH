// When user clicks on the card of specific category it should display profile cards
//  of interested interviewee along with time and some information

import React from 'react'
import styles from "./CategoryCards.module.css"
import { IoMdNotifications } from "react-icons/io";
const CategoryCards = ({category,notification}) => {
  return (
     <>    

    <div className={styles.categoryContainer}>
       {/* display notification only when notification state  is true */}
       {notification && 
       <div className={styles.notificationIcon}>
        <IoMdNotifications />
        </div> }
      <h2>{category}</h2>
    </div>
    </>
  )
}

export default CategoryCards
