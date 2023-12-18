import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './ShopNav.css'

function ShopNav({size}) {

  

  return (

    <div >
      <Navbar expand="lg" className=" nav" >
      <Container>
        <Navbar.Brand href="#home" style={{textDecoration:"none",fontSize:"20px",fontWeight:"600",color:"white"}}>JKArt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto" >

            <Link to={`/`} style={{textDecoration:"none",fontSize:"18px"}}>
              <a href="#home" className='home'>Home</a>
            </Link>

            <Link to={`/cart`} style={{textDecoration:"none",fontSize:"18px"}} >
              <a href="#link" className='home'><FaShoppingCart className='cartIcon'/>
              <span className="cart-animation">{size}</span></a>
            </Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default ShopNav