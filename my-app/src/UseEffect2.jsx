import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function UseEffect2() {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowheight] = useState(window.innerHeight)

    const handlelength=()=>{
        setWindowWidth(window.innerWidth)
        setWindowheight(window.innerHeight)
    }
    

    useEffect(() => {
      window.addEventListener('resize',handlelength)
  
    }, []);

   const [name, setname] = useState('')
   const type = useRef()


   const focus = ()=>{

    type.current.focus()

   }

 
   
    

     
     
 


    return (
        <div>
            {windowWidth}<br/>
            {windowHeight}

            {/* <input type="text" ref={type} onChange={(e)=>setname(e.target.value)} />
            <button onClick={focus}>Focus</button> */}
            
        </div>
    );
}

export default UseEffect2;
