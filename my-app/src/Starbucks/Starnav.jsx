import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import {IoIosPin } from "react-icons/io";
import './Starnav.css'
function Starnav() {
  return (
    

    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home" >
            <img
              src="starbuckslogo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='menu'>MENU</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>REWARDS</Nav.Link>
            <Nav.Link href="#pricing" className='menu'>GIFT CARDS</Nav.Link>
          
          </Nav>
          <Nav>
          <Nav.Link href="#" className='fas'><IoIosPin style={{fontSize:"25px"}}></IoIosPin>Find a store</Nav.Link>
            <Nav.Link href="#"><Button className='si '>Sign in</Button></Nav.Link>
            <Nav.Link href="#"><Button className='jn'>Join now</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  
  )
}

export default Starnav