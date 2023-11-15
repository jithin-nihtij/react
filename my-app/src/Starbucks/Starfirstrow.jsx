import React from 'react'
import { Button, Col, Container, Image, Row, ThemeProvider } from 'react-bootstrap'
import './Starfirst.css'

function Starfirstrow() {
  return (
    <div>
       <Container className="firstparent">

          <div className="row1col1">
            <Image src={require('./starbucksfirstrowimg.webp')} fluid className='firstImg'/>
          </div>
          <div className="row1col2">
            <Container className='col2content'>
              <h1 className='text-center' style={{color:"white",fontSize:"24px"}}>Festivity at your fingertips</h1>
              <p className='text-center' style={{color:"white"}}>Make the season even brighter when you join Starbucks® Rewards. You’ll save time with easy mobile ordering and earn free favorites.*</p>
              <button className='jff'>Join for free</button>
            </Container>

          </div>

        </Container>
      
    </div>
  )
}

export default Starfirstrow