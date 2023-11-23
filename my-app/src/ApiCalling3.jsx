import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function ApiCalling3() {
    const [first, setfirst] = useState([])

    useEffect(() => {
     axios.get('https://dummyjson.com/product').then((disp)=>{

        setfirst(disp.data.products)
        console.log(disp)
        
     })

    },[])
    
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {first.map((disp)=>

            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={disp.images[0]}/>
            <Card.Body>
            <Card.Title>{disp.brand}</Card.Title>
            <Card.Text>
                {disp.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        )}

    </div>
  )
}

export default ApiCalling3