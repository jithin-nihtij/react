import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LoginOrSignUp() {
  return (
    <div style={{display:"flex",justifyContent:"center",height:"500px",flexDirection:"column",alignItems:"center"}}>
        <Link to={`/login`}><Button className='my-5'>Log in</Button></Link>
        <Link to={`/signup`}><Button>Sign Up</Button></Link>
    </div>
  )
}

export default LoginOrSignUp