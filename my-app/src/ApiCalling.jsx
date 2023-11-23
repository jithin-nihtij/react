import React from 'react'
import axios from 'axios'

function ApiCalling() {
    axios.get('https://dummyjson.com/products').then((disp)=>{
        console.log(disp.data.products)
    })
    
  return (
    <div>
        
    </div>
  )
}

export default ApiCalling