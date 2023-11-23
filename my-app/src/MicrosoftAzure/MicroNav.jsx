import React, { useState } from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FaMicrosoft } from "react-icons/fa";
import './MicroNav.css'

function MicroNav() {
    
  return (
    <div >
        
        {/* <Navbar className='mx-4'>
        <Navbar.Brand><FaMicrosoft /></Navbar.Brand>
          <Navbar.Brand href="#home">Azure</Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="#home" className='microItems'>Explore</Nav.Link>
            <Nav.Link href="#features" className='microItems'>Product</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Solutions</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Partners</Nav.Link>
            
          </Nav>
       
      </Navbar>

      <Navbar  className='mx-4'>
        
        
          
          <Nav className="me-auto">
            <input type="text" placeholder='search' />
            <Nav.Link href="#features" className='microItems'>Learn</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Support</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Contact Sales</Nav.Link>
            <Button style={{color:"black",backgroundColor:"green" ,fontSize:"small"}} >Free Account</Button>
            <Nav.Link href="#pricing" className='microItems'>Sign In</Nav.Link>
            
          </Nav>
       
      </Navbar> */}

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mx-4">
      
        <Navbar.Brand href="#home"><FaMicrosoft /></Navbar.Brand>
        <Navbar.Brand href="#home">Azure</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          <Nav.Link href="#home" className='microItems'>Explore</Nav.Link>
            <Nav.Link href="#features" className='microItems'>Product</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Solutions</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Partners</Nav.Link>
          </Nav>
          <Nav>
          <input type="text" placeholder='search' />
            <Nav.Link href="#features" className='microItems'>Learn</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Support</Nav.Link>
            <Nav.Link href="#pricing" className='microItems'>Contact Sales</Nav.Link>
            <Button style={{color:"black",backgroundColor:"green" ,fontSize:"small"}} >Free Account</Button>
            <Nav.Link href="#pricing" className='microItems'>Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

    </div>
  )
}

export default MicroNav