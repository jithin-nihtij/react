import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import './SecondNav.css'

function SecondNav() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features" className='secondNavStyle'>Featured News</Nav.Link>
          <Nav.Link href="#pricing" className='secondNavStyle'>Solutions</Nav.Link>
          <Nav.Link href="#pricing" className='secondNavStyle'>Products and Services</Nav.Link>
          <Nav.Link href="#pricing" className='secondNavStyle'>Resources by role</Nav.Link>
          <Nav.Link href="#pricing" className='secondNavStyle'>Customer Stories</Nav.Link>
          
         
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><Button style={{backgroundColor:"green"}}>Start Free</Button></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default SecondNav