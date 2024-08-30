// this will open when user will login successfully +  <li>dashboard</li>  should be included in navbar
//this will be container for other components of interviewee module


//when th user logs in successfully then according to role,display the some modules on left side list according to roles  
import React, { useState } from 'react'
import styles from './InterVieweeDashboard.module.css'
import BlurBackGroundShape from '../BlurBackgroundShape/BlurBackGroundShape'
import Cards from '../Cards/Cards'
import Guidelines from '../Guidelines/Guidelines'
import Profile from '../IntervieweeProfile/Profile'
import CategoryCards from '../CategoryCards/CategoryCards'
const InterVieweeDashboard = () => {
  const [interviewer,setInterviewer]=useState(true);
  const [notification,setNotification]=useState(true);
  return (
    <div className={styles.intervieweeContainer}>
      <div className={styles.interVieweeDashboardnavigation}>
        <ul>
            <li className={styles.active}> Upcoming Interviews</li>
            <li>Past Interviews</li>
            <li>Profile</li>
            { interviewer ? <li>Interviewer</li>:<li>Guidelines</li>}
            {/* <li>Guideleines</li> */}
        </ul>
      </div>


      <div className={styles.interVieweeDashboardContent}>
      {
        
      interviewer ?
      (
        // for Interveiwer
        <> 
      <Profile interviewer={interviewer}/>

        {/* this cards will display different categories for which  the interviewer is going to take interview */}
        <div  className={styles.cardContainer}>
        {/* <CategoryCards category="Scientist" notification={notification}/>
        <CategoryCards category="Scientist"/>
        <CategoryCards category="Scientist"/>
        <CategoryCards category="Scientist"/>
        <CategoryCards category="Scientist"/>
        <CategoryCards category="Scientist"/>
        <CategoryCards category="Scientist"/>
        <CategoryCards category="Scientist"/> */}

        </div>
        </>
      )
      :
       ( 
        //  For Interviewee 
      //  <div  className={styles.cardContainer}>
      //   <Cards/>
      //   <Cards/>
      //   <Cards/>
      //   <Cards/>
      //   <Cards/>
      //   <Cards/>
      //  </div>  
        // <Guidelines/> 
        <Profile interviewer={interviewer}/>
        )
        
        }

      </div>

      <BlurBackGroundShape/>
    </div>
  )
}

export default InterVieweeDashboard
