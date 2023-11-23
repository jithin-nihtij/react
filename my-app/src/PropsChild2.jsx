import React from 'react'
import { Button } from 'react-bootstrap'

function PropsChild2({val3,val4,setArray}) {

  let changeArray=()=>{
    setArray([...val3,val3[0].location="India",val3[1].location="France"])
  }
  
  
  return (
    <div>
        {val3.map((disp)=>
        <h1>{disp.company} {disp.location}</h1>
        )}
        <Button onClick={changeArray}>Change</Button>

       <h1> {val4 >= 18 ? "Adult" : "Minor"} </h1>
    </div>
  )
}

export default PropsChild2