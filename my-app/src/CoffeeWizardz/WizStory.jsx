import React from "react";
import "./WizStory.css";
import { Container } from "react-bootstrap";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

function WizStory() {
  return (
    <div className="storyStyle">
      <h1 className="aboutUs">ABOUT US</h1>
      <Container className="storyImg">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/c34c2c3c-e9ed-4428-971e-0e4490cccf4a/BUZZ_CoffeeWizardz1_102821-web.jpg?format=2500w 2500w"
          alt=""
          style={{objectFit:"cover",width:"90%"}}
        />
        
      </Container>
      <Container className="storyPara">

          <p className="adventure">THE NEXT ADVENTURE IN COFFEE…</p>
          <p className="stry">
          Founded on the idea that great coffee should be fun, adventurous and available to everyone; we set out to create a coffee experience that involves sourcing quality coffee with meticulously curated ingredients. 

            The result? A magical, luxury coffee experience with a down-to-earth feel. Crafted with intention, we rotate our menu seasonally with the consumer experience in mind. We seek to h0nor the hard work and dedication of the farmers and mill workers do at origin.

            What started as simple pop-up, followed by a kickstarter for our first roaster, culminated in opening of our flagship roastery and cafe in Allouesz, WI. We hope to continue creating spaces where people from diverse backgrounds can not only feel welcome, but included in a community that thrives on connection, care and, great coffee.

            If you’re in the area, stop by and say hello! We love to meet new friends, near and far.

            Cheers!

            - Chris + Tawn, Sam + Jenna
          </p>
        </Container>
        <Container className="storyFooter">

          <p>COFFEE WIZARDZ, 536 GREENE AVENUE, ALLOUEZ, WI, 54301, UNITED STATES  INFO@COFFEEWIZARDZ.COM</p>
          <ul style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>
            <li style={{listStyleType:"none"}}><IoLogoInstagram style={{fontSize:"30px",color:"white"}}/></li>
            <li style={{listStyleType:"none"}}><FaFacebookF style={{fontSize:"30px",color:"white"}}/></li>
        </ul>

        </Container>
    </div>
  );
}

export default WizStory;
