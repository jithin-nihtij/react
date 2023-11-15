import React, { useState } from 'react'

function UseState2() {

    const [num, setfirst] = useState(1)

    const add=()=>{
        setfirst(num+1)
    }

    const sub=()=>{
    
        if(num==0){
            alert("Impossible")
        }
        else
        {
        setfirst(num-1)
        }
    }
  return (
    <div>
        <h1>Num is {num}</h1>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>

    </div>
  )
}

export default UseState2