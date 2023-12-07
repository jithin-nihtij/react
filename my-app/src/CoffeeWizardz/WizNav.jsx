import React from 'react'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './WizNav.css'

function WizNav() {
  return (


    <div>
      <Navbar collapseOnSelect expand="lg" className="navBarStyle" >
      <Container>
      <Navbar.Brand href="#home" >
            <img
              src="//images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1615145155246-1HX39QACDMC2O43HK921/sphinxfinalcreamtext+%283%29.png?format=1500w"
              width="80"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"yellow"}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          
          </Nav>
          <Nav>
            <Link to='/' className='navLinkStyle'><Nav.Link href="/"  className='navLinkStyle'>HOME</Nav.Link></Link>

            <Link to='/stores' className='navLinkStyle'><Nav.Link href="/stores" className='navLinkStyle'>STORES</Nav.Link></Link>

            <Link to='/potions' className='navLinkStyle'><Nav.Link href="/potions" className='navLinkStyle'>POTIONS PAST</Nav.Link></Link>

            <Link to='/story' className='navLinkStyle'><Nav.Link href="/story" className='navLinkStyle'>OUR STORY</Nav.Link></Link>

            <Link to='/locations' className='navLinkStyle'><Nav.Link href="/locations" className='navLinkStyle'>LOCATIONS</Nav.Link></Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default WizNav