import React, { useState } from 'react'

function UseState3() {

    const [first, setfirst] = useState("Black")

    const blue=()=>{
        setfirst("Blue")
    }
    const red=()=>{
        setfirst("Red")
    }
    const yellow=()=>{
        setfirst("yellow")
    }


  return (
    <div>
        <h2>Color is {first}</h2>
        <button onClick={blue}>Blue</button>
        <button onClick={red}>Red</button>
        <button onClick={yellow}>Yellow</button>
    </div>
  )
}

export default UseState3