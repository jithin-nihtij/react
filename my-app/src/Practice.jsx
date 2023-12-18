import React, { useState } from 'react'
import { CiSun } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

function Practice() {


    const [bg, setbg] = useState(false)
    
    const change=()=>{
        setbg(!bg)
    }


  return (
    <div>

    <div style={{backgroundColor:bg?'black':'white'}}>
    
    <h1>{bg?'Dark mode':'light-mode'}</h1>

      <button onClick={change} style={{borderRadius:"20px"}}>{bg?<CiSun />:<FaMoon />}</button>

    </div>
              
    </div>
  )
}

export default Practice