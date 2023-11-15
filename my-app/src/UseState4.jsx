import React, { useState } from 'react'

function UseState4() {

    const [color, setfirst] = useState("black")

    const blue=()=>{
        
        setfirst("blue")
    }
    const red=()=>{
        setfirst("red")
    }
    const yellow=()=>{
        setfirst("yellow")
    }

  return (
    <div>
        
        <h2 style={{color:color}}>Color is {color}</h2>
        <button onClick={blue}>Blue</button>
        <button onClick={red}>Red</button>
        <button onClick={yellow}>Yellow</button>
    
    </div>
  )
}

export default UseState4