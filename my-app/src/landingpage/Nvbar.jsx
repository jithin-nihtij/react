import React from 'react'
import { Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Nvbar.css';

function Nvbar() {
  return (
    <div>
        <Navbar data-bs-theme="dark" className='nvbar'>
        <Container >
        <Navbar.Brand href="#home">
            <img
              src="xo.png"
              width="100%"
              height="30"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
              
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home" className='items ms-3'>Home</Nav.Link>
            <Nav.Link href="#features" className='items ms-3'>Albums</Nav.Link>
            <Nav.Link href="#pricing" className='items ms-3'>Stream</Nav.Link>
            <Nav.Link href="#pricing" className='items ms-3'>Merchandise</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  )
}

export default Nvbar