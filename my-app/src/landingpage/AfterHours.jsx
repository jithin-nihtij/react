import React from 'react'
import { Button, Col, Container, Row, ThemeProvider } from 'react-bootstrap'
import './AfterHours.css'
import { Link, useNavigate } from 'react-router-dom'

function AfterHours() {
  let star = useNavigate()
  
  let change =()=>{
    star('/StarBucks')
  }
  return (
    <div>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs" >
    <div>
    <Container fluid>
      <Row>
      <Col sm={4}>
        <h2 className='ahead'>After Hours</h2>
        <p>After Hours is the fourth studio album by Canadian singer the Weeknd, released on March 20, 2020, by XO and Republic Records. Primarily produced by the Weeknd, it features a variety of producers, including DaHeala, Illangelo, Max Martin, Metro Boomin, and OPN, most of whom the Weeknd had worked with previously. The standard edition of the album has no features, but the deluxe edition features Ariana Grande and the remixes edition contains guest appearances from Chromatics and Lil Uzi Vert. Thematically, After Hours explores loneliness, self-loathing, and escapism.
        Prior to the album's release, the Weeknd confirmed that After Hours would contrast stylistically with its predecessor, Starboy (2016). Music journalists have noted the album as an artistic reinvention for the Weeknd, with the introduction of new wave and dream pop influences. .</p>
        <Button onClick={change} className='AhButton'>Listen Now</Button>
        </Col>
        <Col sm={8}>
        <img src={require('./After.jpg')} className='afImg'/>
        </Col>
        
      </Row> 
    </Container>
    <hr />
    </div>
        </ThemeProvider>;
    </div>
    
  )
}

export default AfterHours