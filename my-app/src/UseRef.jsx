import React ,{ useEffect, useRef, useState} from 'react'

function UseRef() {


 const btnCount = useRef(0)



 const count =()=>{  
  btnCount.current = btnCount.current+1
  console.log( btnCount.current)  
 }

  return (
    
    <div>

      <button onClick={count}>Click</button>
      <h1>i clicked {btnCount.current} times</h1>  
    </div>
  )
}

export default UseRef