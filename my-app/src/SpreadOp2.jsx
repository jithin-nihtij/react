import React, { useState } from 'react'

function SpreadOp2() {

    const [car, newCar] = useState([
        {
            company:"Ford",
        model:"Mustang"},
        {
        company:"Porsche",
        model:"911 GT3RS"

        },
        {
        company:"BMW",
        model:"M5"
        }
    ])

    const newOne = [{
        company:"Audi",
        model:"Q8"},
        { 
        company:"Benz",
        model:"AMG"
    }]

    const obje = {company:"Maruti",model:"Swift"}

   let add=()=> newCar([...car,...newOne])

   let obj=()=> newCar([...car,{...obje}])
   
  return (
    <div>
       
        <table >
        <tr>
          <th>Company Name</th>
          <th>Model Name</th>
         
        </tr>
        {car.map((disp=>
            <tr>{disp.company}
            <td>{disp.model}</td>
            </tr>
            ))}
         </table>

        <button onClick={add}>add Array</button>
        <button onClick={obj}>add object</button>
    </div>
  )
}

export default SpreadOp2