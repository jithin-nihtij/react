import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Ternary() 
{
    const [show, setShow] = useState(false)

   
    
  return (
   
    <div>
       
        <Button onClick={()=>setShow(!show) }> {show?"show":"hide"} </Button>
        {show?<h1>This is to show</h1>:" "}
        
       
    </div>
  )
}

export default Ternary