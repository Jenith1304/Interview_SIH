import React from 'react'
import styles from "./ContactUs.module.css"
import { IoMailSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactLeft}> 
        <h1>CONTACT US</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam molestiae omnis error 
            tempora doloribus, eum illo delectus 
            placeat repellat? 
        </p>
            <div style={{display:"flex",flexDirection:"column"}}>
           <p style={{textAlign:"center"}}><IoMdCall />+91 1234567890</p> 
           <p style={{textAlign:"center"}}> <IoMailSharp />test@gmail.com</p> 
            </div>
      </div>
      <div className={styles.contactRight}>
        <form>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" />
            <label htmlFor='email'>Email</label>
            <input type="email" name="email" />
            <label htmlFor='message'>Message</label>
            <textarea name="message" rows={7}></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
