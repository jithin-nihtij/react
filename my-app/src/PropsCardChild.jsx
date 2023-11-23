import React from 'react'
import { Button, Card } from 'react-bootstrap'

function PropsCardChild({fruit,sf,veg}) {

const change=()=>{
    sf(veg)
}

  return (
    <div>
        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"red"}}>
        {fruit.map((disp)=>
        <Card style={{ width:'18rem'}}>
                <Card.Img variant="top" src={disp.image} />
                <Card.Body>
                    <Card.Title>{disp.name}</Card.Title>
                    <Card.Text>
                    {disp.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            )}
        </div>

    <div style={{display:"flex",justifyContent:"center"}}>
            <button onClick={change}>change</button>
    </div>

    </div>
  )
}

export default PropsCardChild