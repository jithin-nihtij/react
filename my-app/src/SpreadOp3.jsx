import React, { useState } from 'react'

function SpreadOp3() {
    const [first, setfirst] = useState(
        {name:"jithin",
        age:"21"}
        )

        //Other way to do it
        // let newAge = {age:"25"}


    let change=()=>setfirst({...first,age:"25"})

  return (
    <div>
    
        <h1>My name is {first.name}.I am {first.age} years old</h1>
     
        <button onClick={change}>change</button>
    </div>
  )
}

export default SpreadOp3