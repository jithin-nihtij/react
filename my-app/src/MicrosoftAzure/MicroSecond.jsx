import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import './MicroSecond.css'

function MicroSecond() {

    const [first, setfirst] = useState([
        {
            title:"Microsoft Ignite",
            image:"firstCardImage.avif",
            text:"Explore the latest Azure innovations, learn from experts, level up your skillset, and expand your network.",
            btnText:">"
        },
        {
            title:"Discover the latest AI innovations",
            image:"secondCardImage.avif",
            text:"Deliver intelligent solutions and differentiate your business with cutting-edge AI—explore the latest AI tools and features from Azure.",
            btnText:">"
        },
        {
            title:"Microsoft Ignite",
            image:"thirdCardImage.avif",
            text:"Explore the latest Azure innovations, learn from experts, level up your skillset, and expand your network.",
            btnText:">"
        }
    ])

  return (

    <div className='cardGrid'>

    {first.map((disp)=>
    <Card style={{width:"400px",borderRadius:"20px"}} className='my-3'>
      <Card.Img variant="top" src={disp.image} style={{borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title>{disp.title}</Card.Title>
        <Card.Text>
          {disp.text}
        </Card.Text>
        <Button variant="primary">{disp.btnText}</Button>
      </Card.Body>
    </Card>
    )}
    </div>

  )
}

export default MicroSecond