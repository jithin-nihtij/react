import React from 'react'
import { Button, Col, Container, Image, Row, ThemeProvider } from 'react-bootstrap'
import './Starboy.css'
function Starboy() {
  return (
    <div>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs" >
    <div>
    <Container fluid>
      <Row>
        <Col sm={8}>
        <img src={require('./Starboy.jpg')} className='StImg'/>
        </Col>
        <Col sm={4}>
        <h2 className='Sthead'>Starboy</h2>
        <p>Starboy is the third studio album by Canadian singer the Weeknd, released on November 25, 2016, through XO and Republic Records. It features guest appearances from Daft Punk, Lana Del Rey, Kendrick Lamar, and Future. As the album's executive producers, the Weeknd and Doc McKinney enlisted a variety of producers such as Diplo, Cashmere Cat, Metro Boomin, Frank Dukes, and Labrinth, among others.
        Starboy was supported by seven singles, including the US Billboard Hot 100 number-ones "Starboy" and "Die for You" (which topped the chart following a remix with Ariana Grande), and the top-five single "I Feel It Coming". It received generally favorable reviews from critics and debuted at number one on the US Billboard 200 with 348,000 album-equivalent units (209,000 of which were pure sales), becoming the Weeknd's second consecutive number-one album. It also debuted at number one on Billboard's Canadian Albums Chart. Starboy won Best Urban Contemporary Album at the 60th Annual Grammy Awards in 2018, marking the Weeknd's second win in that category.</p>
        <Button href="https://youtube.com/playlist?list=OLAK5uy_lIh621OMo4dgezJVXJ1d_zVHeClb6RYRU&si=DYOounvoRdesRKFh" className='StButton'>Listen Now</Button> 
        </Col>
      </Row>
    </Container>
    </div>
        </ThemeProvider>;
    </div>
  )
}

export default Starboy