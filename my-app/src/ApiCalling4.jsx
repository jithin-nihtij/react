import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'

function ApiCalling4() {

    const [first, setfirst] = useState([])
   
   useEffect(() => {

    axios.get('https://dummyjson.com/product').then((disp)=>{

        setfirst(disp.data.products)
        console.log(disp.data)
        
    })
   
   }, [])

   


   
   

  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {first.map((disp)=>

            <Card style={{ width: '18rem'}}>
            <Carousel>
               
               {disp.images.map((disp)=>
                <Carousel.Item>
                    <img text="First slide" src={disp} style={{objectFit:"cover",height:"200px",width:"200px"}}/>    
                </Carousel.Item>
                )}
                
            </Carousel>
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

export default ApiCalling4