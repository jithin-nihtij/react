import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [first, setfirst] = useState("hello")

    useEffect(() => {
     alert("hi")
    }, [first])
    
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst("hope")}>Change</button>
    </div>
  )
}

export default UseEffect