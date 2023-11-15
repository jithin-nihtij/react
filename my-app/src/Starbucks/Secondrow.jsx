import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import './Secondrow.css'
function Secondrow() {
  return (
    <div>
        <Container className='starparent2'>
          
          <div className='row2col1'>
            <Container className='secondrowcontent'>
              <h2> Let’s celebrate </h2>
              <p >Your holi-yay favorites are here. Pick up a Peppermint Mocha, Iced Sugar Cookie Almondmilk Latte or Caramel Brulée Latte.</p>
              <Button style={{backgroundColor:"#006241",border:"1px white solid",borderRadius:"20px"}}>Find your favorite</Button>
            </Container>
          
          </div>
          <div className='row2col2'>
            <Image src={require('./secondrowimg.png')} className='secondimg' fluid/>
          </div>
        
      </Container>
    </div>
  )
}

export default Secondrow