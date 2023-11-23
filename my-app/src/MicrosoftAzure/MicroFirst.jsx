import React from 'react'
import './MicroFirst.css'
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

function MicroFirst() {

  return (
    <div className='microFirstStyle' fluid>
        <div className='mx-4'>
        <h1 style={{fontSize:"50px"}}>Endless possibilities—from the edge to the cloud </h1>
        <p>Broaden your impact with global infrastructure, cutting-edge AI services, and the latest dev tools. Pay-as-you-go or try Azure free for up to 30 days. There’s no upfront commitment—cancel anytime.</p>
        
        <Button>Get Started</Button><Button className='mx-2' style={{backgroundColor:"transparent",color:"blue"}}>Try Azure For free</Button>
       
        </div>
        <div>

        </div>

        
    </div>
  )
}

export default MicroFirst