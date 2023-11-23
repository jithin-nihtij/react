import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApiCalling2() {

    const [first, setfirst] = useState([])


    useEffect(() => {

        axios.get('https://dummyjson.com/product').then((display)=>{
            setfirst(display.data.products)
            console.log(display)
        })
    
    }, [])
    
   

  return (
    <div>
        {first.map((display)=>
            <>
            <h1>{display.brand}</h1>
            </>
        )}
    </div>
  )
}

export default ApiCalling2