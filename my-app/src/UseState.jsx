import React, { useState } from 'react'

export default function UseState() {

    const [first, setfirst] = useState("Jithin")
    // const change=()=>{
    //     setfirst("Vengaence")
    // }
  return (
    <div>
        <p>I am {first}</p>
        <button onClick={()=>{setfirst("Batman")}}> Change </button>
    </div>
  )
}
