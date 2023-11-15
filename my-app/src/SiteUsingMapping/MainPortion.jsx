import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import './MainPortion.css'
function MainPortion() {
    const [first, setfirst] = useState([
        {
            ImgCard:"starbuckslogo.png",
            uname:"nihtij",
            Image:"img2.jpeg"
        },
        {
            ImgCard:"starbuckslogo.png",
            uname:"laz1m",
            Image:"img12.jpg"
        },
        {
            ImgCard:"starbuckslogo.png",
            uname:"syth.exe",
            Image:"img20.jpg"
        },
        {
            ImgCard:"starbuckslogo.png",
            uname:"r4heem",
            Image:"img18.jpg"
        },
        {
            ImgCard:"starbuckslogo.png",
            uname:"selenophile",
            Image:"img10.jpg"
        },
        {
            ImgCard:"starbuckslogo.png",
            uname:"ashifop",
            Image:"img2.jpeg"
        }
    ])
  return (
    <div>
       
        <Container>
       
            <div className="MapParent">
            {first.map((disp=>
                <div className="MapChild"><img src={disp.Image} style={{width:"100%",objectFit:"cover",height:"250px"}} /></div>
                ))}
                
              </div> 
            <div style={{display:"flex" ,justifyContent:"space-between"}}>
                {first.map((show=>
              <Card style={{ width: '18rem',textAlign:"center" }}>
                <Card.Img variant="top" src={show.ImgCard} />
                    <Card.Body>
                    <Card.Title>{show.uname}</Card.Title>
                       
                        <Button variant="primary">Follow</Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
          
           
        </Container>
         
    </div>
  )
}

export default MainPortion