import React, { useState } from 'react'

function Mapping() {

    const [first, setfirst] = useState([{name:"Jithin ",place:"Edakkad"},{name:"Raheem ",place:"Thiruvambadi"}])

  return (
    <div>
        {first.map((disp)=>
            <h1>{disp.name}{disp.place}</h1>
        )}
    </div>
  )
}

export default Mapping