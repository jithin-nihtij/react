import React, { useState } from 'react'
import './Weather.css'
import axios from 'axios'
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";

function WeatherApp() {

  

  const [data, setdata] = useState([])

  const [location, setlocation] = useState('')

 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d9f7e092d64a2e4b91e6338aa4e1dbf5`


 const handle=(event)=>{
    setlocation(event.target.value)
 }

  const search=(event)=>{
   
      if(event.key==="Enter")
      {
        axios.get(url).then((disp)=>{
        setdata([disp.data])
      
        console.log(disp.data)
      })

     
    }
  }



  const getWeatherIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/w/${iconCode}.png`;
  };
  
    
  return (
    <div className='wrapper1'>
      <h1>WEATHER APP</h1>
      <p>Search your  city</p>
      <div className='parent'>

         <div className="search">
          <input 
          type="text"
          value={location}
          placeholder='search' 
          onChange={handle}
          onKeyPress={search}
          />
         </div>

      {data.map((disp)=>
        <div className='container place'>
         <h4>{disp.name}</h4>
         <h1>{disp.main && Math.round(disp.main.temp - 273.15)} °C</h1>
        </div>
      )}

      {data.map((disp)=>
        <div className="container windNhumid">
          <p>Humidity<WiHumidity />:{disp.main.humidity}%</p>
          <p id='wind'>Wind<WiStrongWind />:{disp.wind.speed}m/s</p>
        </div>
        )}



      {data.map((disp) => ( 
        <div>
        {disp.weather.map((disp) => (
                <div className="clouds">
                  <p>{disp.description}</p>
                  <img
                src={getWeatherIconUrl(disp.icon)}
                alt={disp.description}
              />
                </div>
                ))}
          </div>
        ))}
      
      </div>
{/* 
         {data.map((disp) => (
        <div >
          <h1>{disp.main && disp.main.temp} F</h1>
          <h1>Humdity:{disp.main.humidity}%</h1>
          <h1>{disp.name}</h1>
          <h1>Wind Speed:{disp.wind.speed}m/s</h1>
          {disp.weather.map((disp) => (
            <div >
              <h1></h1>
              <h1>{disp.description}</h1>
              <img
                src={getWeatherIconUrl(disp.icon)}
                alt={disp.description}
              />
            </div>
          ))}
        
        </div>
      ))}
      */}
    </div>
  )
}

export default WeatherApp