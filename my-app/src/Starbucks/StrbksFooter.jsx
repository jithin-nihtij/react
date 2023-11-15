import React from 'react'
import './StrbksFooter.css'
import { Col, Container, Row } from 'react-bootstrap'

import { BiLogoSpotify } from "react-icons/bi";
import {BiLogoFacebookCircle} from "react-icons/bi"
import {BsPinterest} from "react-icons/bs"
import {AiOutlineInstagram} from "react-icons/ai"

function StrbksFooter() {

  return (
    <div>
       <hr />
        <Container>
     
      <Row>
        <Col  xs={8} lg={3}>
          <h3>About Us</h3>
          <p>Our Company</p>
          <p>Our Coffee</p>
          <p>Stories and news</p>
          <p>Investor Relation</p>
          <p>Contact Us</p>
          
        </Col>

        <Col xs={8} lg={3}>
          <h3>Careers</h3>
          <p>Culture and values</p>
          <p>College Achievement Plan</p>
          <p>Alumni Community</p>
          <p>U.S. Careers</p>
        </Col>

        <Col xs={8} lg={3}>
          <h3>Social Impact</h3>
          <p>People</p>
          <p>Planet</p>
          <p>Environmental and Social Impact Reporting</p>
        </Col>

        <Col xs={8} lg={3}>
          <h3>For Bussiness Partners</h3>
          <p>Suppliers</p>
          <p>Landlord Support Center</p>
          <p>Office and Foodservice Cofee</p>
        </Col>
      </Row>

      <hr/>

        <ul className='ulstyle'>
           <li className='socialicons'><BiLogoSpotify></BiLogoSpotify></li>
           <li className='socialicons'><BiLogoFacebookCircle></BiLogoFacebookCircle></li>
           <li className='socialicons'><BsPinterest></BsPinterest></li>
           <li className='socialicons'><AiOutlineInstagram></AiOutlineInstagram></li>
           
              
        </ul>

        </Container>
    </div>
  )
}

export default StrbksFooter