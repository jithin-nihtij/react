import React, { useState } from 'react'
import PropsChild from './PropsChild'
import PropsChild2 from './PropsChild2'


function PropsParent() {
    const [first, setfirst] = useState("hello")
    const [second, setSecond] = useState({name:"jithin",age:21})
    const [third, setthird] = useState([
        {
            company:"Google",
            location:"US"
        },
        {
            company:"Facebook",
            location:"US"
        },

    ])

    const [age, setage] = useState(18)

  return (

    <div>
        <PropsChild val={first} val2={second} val5={setfirst}/>
        <PropsChild2 val3={third} val4={age} setArray={setthird}/>
        
        
    </div>
  )
}

export default PropsParent