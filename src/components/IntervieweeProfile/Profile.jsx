import React from 'react'
import styles from './Profile.module.css'
import { LuGithub } from "react-icons/lu";
import { TiSocialLinkedin } from "react-icons/ti";
import { CiGlobe } from "react-icons/ci";
const Profile = ({interviewer}) => {
  return (
    // main Container
   <div className={styles.profileContainer}>

    {/* leftSegment */}
    <div className={styles.profileLeft}>
        {/* profilePhoto and personal Info */}
        <div className={styles.profileDetails}>
           <div className={styles.profilePic}><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Profile Pic" /></div> 
           <h1>Name</h1>
           <p>Position</p>
           <p>location</p>
        </div>
        {/* Social and their links */}
        <div className={styles.profileSocials}>
            <ul>
                    <li>
                        <p><TiSocialLinkedin />LinkedIn</p> 
                         <p>https://google.com</p>
                    </li>
                    <li>
                    <p><CiGlobe />Webiste</p>
                    <p>https://google.com</p>    
                    </li>
                {interviewer ? 
                (
                    <>
                    
                   <li>
                        <p>Experience</p> 
                         <p>5 Years</p>
                   </li>
                   <li>
                        <p>Expertise</p> 
                         <p>HTML,CSS</p>
                   </li>
                   </>

                )
                :
                ( 
                    <>
                 <li>
                    <p><LuGithub />Github</p> 
                    <p>https://google.com</p>
                </li>
                <li>
                    <p><TiSocialLinkedin />LinkedIn</p> 
                    <p>https://google.com</p>
                </li>
                </> 
                )}
                
            </ul>
        </div>
    </div>
    {/* rightSegment */}
    <div className={styles.profileRight}>
        {/* profileInformation like Full Name */}
         <div className={styles.profileInfo}>
         <ul>
                <li>
                    <p><b>Full Name</b></p> 
                    <p>Jenith Prashantbhai Panchal</p>
                </li>
                <li>
                     <p><b>Email</b></p> 
                    <p>Jenith Prashantbhai Panchal</p>
                </li>
                <li>
                    <p><b>Mobile</b></p> 
                    <p>Jenith Prashantbhai Panchal</p>
                </li>
                <li>
                    <p><b>Address</b></p> 
                    <p>Jenith Prashantbhai Panchal</p>
                </li>
            </ul>
            <button type='submit'>Edit</button>
        </div>
        {/* for Skills + Project */}
        <div className={styles.skillsContainer}>
       
        {/* display else sispay skills and projects */}
                {interviewer ?
                (
                        // Interviews Taken 
                        <div className={styles.interviewsTaken}>
                                <h1 style={{textAlign:"center"}}> Interviews Taken</h1>
                               
                                <div style={{marginTop:"15px"}}>        
                                    <p>Category 1</p>
                                    <p>25</p>
                                 </div>
                                

                                 <div style={{marginTop:"15px"}}>        
                                    <p>Category 1</p>
                                    <p>25</p>
                                 </div>

                                 <div style={{marginTop:"15px"}}>        
                                    <p>Category 1</p>
                                    <p>25</p>
                                 </div>
                        </div>
                ):(
                    //   Skills
                    <> 
                         <div className={styles.skills}>
        <h1 style={{textAlign:"center"}}>Skills</h1>
            <div style={{marginTop:"15px"}}>
                <p>Skill1</p>
                <progress value="32" max="100"> 32% </progress>
            </div>

            <div style={{marginTop:"15px"}}>
                <p>Skill1</p>
                <progress value="32" max="100"> 32% </progress>
            </div>

            <div style={{marginTop:"15px"}}>
                <p>Skill1</p>
                <progress value="32" max="100"> 32% </progress>
            </div>
                        </div>
                        {/* Projects  */}
                        <div className={styles.projects}>
        <h1 style={{textAlign:"center"}}>Projects</h1>
            <div style={{marginTop:"15px"}}>
            <p>Skill1</p>
            <p>HTML CSS PHP</p>
            </div>

            <div style={{marginTop:"15px"}}>
                <p>Skill1</p>
                <p>HTML CSS PHP</p>
            </div>

            <div style={{marginTop:"15px"}}>
            <p>Skill1</p>
            <p>HTML CSS PHP</p>
            </div>
                        </div>
                    </>
                )}
       
        </div>
    </div>
   </div>
  )
}

export default Profile
