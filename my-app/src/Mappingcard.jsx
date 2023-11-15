import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function Mappingcard() {

    const [first, setfirst] = useState(
    [
        {
            name:"image one",
            Image:"img2.jpeg",
            place:"Perambra"

        },
        {
            name:"image two",
            Image:"img12.jpg",
            place:"Dandelli"

        },
        {
            name:"image three",
            Image:"img18.jpg",
            place:"Coorg"

        },
        {
            name:"image four",
            Image:"img20.jpg",
            place:"Coorg"
            

        },
    ]
    )
  return (
    <div style={{display:"flex" ,justifyContent:"space-aroundofhfhj"}}>
        {

        first.map((disp)=>
        
            <Card style={{ width:'18rem'}}>
                <Card.Img variant="top" src={disp.Image} />
                <Card.Body>
                    <Card.Title>{disp.name}</Card.Title>
                    <Card.Text>
                    {disp.place}
                    </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          
            )
        }

    </div>
  )
}

export default Mappingcard