import React, { useState } from 'react'
import PropsCardChild from './PropsCardChild'

function PropsCardParent() {

    const [fruit, setfruit] = useState(
    [
        {
            image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
            name:"Apple",
            price:"50"
        },
        {
          image:"https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg",
          name:"Orange",
          price:"70"
        }
    ])

    const [vegetable, setVegetable] = useState(
      [
          {
              image:"	https://img.etimg.com/thumb/width-640,height-480,i…your-favourite-fruit-this-year/tomatoes-canva.jpg",
              name:"Tomato",
              price:"20"
          },
          {
            image:"	https://upload.wikimedia.org/wikipedia/commons/d/da/Red_capsicum_and_cross_section.jpg",
            name:"Capsicum",
            price:"70"
          }
      ])

  return (
    <div>
      <PropsCardChild fruit={fruit}  sf={setfruit} veg={vegetable}/>
    </div>
  )
}

export default PropsCardParent