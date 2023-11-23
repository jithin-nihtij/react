import React from 'react'
import { Button } from 'react-bootstrap'

function PropsChild({val,val2,val5}) {

   let change=()=>{val5("hai")}

  return (
    <div>
        <h1>{val}</h1>
        <Button onClick={change}>Change</Button>
        <h1>{val2.name} {val2.age}</h1>
        
    </div>
  )
}

export default PropsChild