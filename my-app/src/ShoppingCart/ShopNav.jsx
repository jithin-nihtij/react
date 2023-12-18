import React, { useContext, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import './ShopNav.css'
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { shopContext } from './ParentRouter';

function ShopNav({ size }) {
  const { bg, changeMode } = useContext(shopContext);

  return (

    <div >
      <Navbar expand="lg" className={bg?' light-nav':'dark-nav'} >
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

            <button onClick={changeMode} style={{ borderRadius: "20px" }} aria-label={bg ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                {bg ? <FaMoon />:<CiSun />  }
              </button>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default ShopNav