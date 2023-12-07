import React from 'react'
import './WizHome.css'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function WizHome() {

  return (
    <>
    <div className='home' style={{backgroundColor:"#270c13",paddingTop:"100px"}}>
        <h1 className='text-center welcome'>WELCOME TO COFFEE WIZARDZ</h1>
        <img src="https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/426b00e8-ca78-4f05-af98-c40412c46ccb/2.jpg" alt="" className='HomeBanner'/>
    </div>
    <div className='HomeFooter'>
        <ul style={{display:"flex",justifyContent:"center",backgroundColor:"#270c13"}}>
            <li style={{listStyleType:"none"}}><IoLogoInstagram style={{fontSize:"30px",color:"white"}}/></li>
            <li style={{listStyleType:"none"}}><FaFacebookF style={{fontSize:"30px",color:"white"}}/></li>
        </ul>
    </div>
    </>

  )
}

export default WizHome

