import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function ApiAssignment3() {

    const [first, setfirst] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((disp)=>{
            setfirst(disp.data)
        console.log(disp)
        })
     
    }, [])
    
  return (
    <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>

    {first.map((disp)=>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={disp.thumbnailUrl} />
      <Card.Body>
        <Card.Title>Album Id: {disp.albumId}</Card.Title>
        <Card.Title>Id:{disp.id}</Card.Title>
        <Card.Title>{disp.title}</Card.Title>
       
        
        <Button variant="primary"><a href={disp.url} style={{color:"white",textDecoration:"none"}}>Click here to open</a></Button>
      </Card.Body>
    </Card>
    )}
        
    </div>
  )
}

export default ApiAssignment3