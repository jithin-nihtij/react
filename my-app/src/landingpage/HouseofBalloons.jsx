import React from 'react'
import { Button, Col, Container, Row, ThemeProvider } from 'react-bootstrap'
import './House.css'
function HouseofBalloons() {
  return (
    <div>
    <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs" >
<div>
<Container fluid>
  <Row>
    <Col  sm={8}>
    <img src={require('./hob.jpg')} className='HoImg'/>
    </Col>
    <Col sm={4}>
    <h2 className='Hohead'>HouseOfBalloons</h2>
    <p>House of Balloons is the debut mixtape by Canadian singer the Weeknd. It was released on March 21, 2011, by the artist's own record label XO. The mixtape was released for free on the Weeknd's website and was the subject of increased media discussion upon the use of its songs on television, as well as the then-anonymous identity of the individual behind the Weeknd. House of Balloons was entirely recorded in Toronto, with production handled primarily by the Weeknd, Doc McKinney, Illangelo, and Cirkut; the Weeknd would later collaborate with McKinney and Illangelo on several future releases. Its title is derived from the nickname the singer gave to his former home in Parkdale, Toronto.</p>
    <Button href="https://youtube.com/playlist?list=OLAK5uy_lj1KcaPJYjA1n29DoIF68QMbDehOplyEI&si=1Y-VV6mFMXbwoWJl" className='hobButton'>Listen Now</Button> 
    </Col>
  </Row>
</Container>
  <hr/>
</div>
    </ThemeProvider>;
</div>
  )
}

export default HouseofBalloons