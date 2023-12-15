import React from 'react'
import axios from 'axios'

function ApiCalling() {
    axios.get(' https://dummyjson.com/products').then((disp)=>{
        console.log(disp.data.products)

        // https://api.openweathermap.org/data/3.0/onecall?lat=-90;90&lon=-180;180&exclude=minutely&appid=d4ccfa8d746e9095bee84ef61cd72bbd
    })
    //
  return (
    <div>
        
    </div>
  )
}

export default ApiCalling