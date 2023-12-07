import React, { useState } from 'react'
import './WizPotions.css'



function WizPotions() {

    const [first, setfirst] = useState([
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1565549013824-5395PGDSC0WXUG9BWW0S/CoffeeWizards_screengrab_01.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1540320563244-HKA3KTDUXD70WBAE0SPN/pebble2.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1540320576995-ZKZVQEI50RKYHH8HCES4/graham.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1565548989566-1HUA4KZ0J1G2GPH4GCNE/CoffeeWizards_2019_40.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1565548737572-HT4GDUTKE4OT9T40P7GJ/CoffeeWizards_2019_01.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1565549026896-O76E2ZNTZUU7803YI95J/CoffeeWizards_screengrab_21.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1565548952231-CGOOLY05WBUIGQR34OJH/CoffeeWizards_2019_17.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1540321630833-HMPM5SNVV83XNVJSV3ZU/pumpkinpie.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1540321281689-9K0KOC17B604M40DSTO9/IMG_4925.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1540320572605-MK4HNJ4V1RLA7C5PH5X8/pebbles.jpg?format=2500w"},
        {img:"https://images.squarespace-cdn.com/content/v1/5bcf31f1840b1601f03e9ca7/1565549029273-JVDFT6XE8CCUFKG3EAGO/CoffeeWizards_screengrab_36.jpg?format=2500w"},
    
    ])

  return (
    <div className='potionDiv'>
        {first.map((disp)=>
        <div >
            <img src={disp.img} alt="" className='potionImg'/>
        </div>
        )}
    </div>
  )
}

export default WizPotions