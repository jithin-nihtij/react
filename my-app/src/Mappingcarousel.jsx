import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

function Mappingcarousel() {

    const [first, setfirst] = useState(
    [
        {
            title:"First Image",
            Image:"img20.jpg"
        },
        {
            title:"Second Image",
            Image:"img2.jpeg"
        },
        {
            title:"Third Image",
            Image:"img10.jpg"
        }

    ])
  return (
    <div>
        <Carousel>
        {first.map(disp=>
            <Carousel.Item>
                <img src={disp.Image} style={{width:"100%",objectFit:"cover",height:"750px"}}/>
                <Carousel.Caption>
                <h3></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            )}
      
    </Carousel>
    </div>
  )
}

export default Mappingcarousel