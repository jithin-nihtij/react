import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ShopNav({size}) {

  

  return (

    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Link to={`/`}><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to={`/cart`}><Nav.Link href="#link">Cart <span>{size}</span></Nav.Link></Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default ShopNav