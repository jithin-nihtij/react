import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function SignUp() {



    const navigate=useNavigate()

    const [name, setname] = useState("")

    const [email, setemail] = useState("")

    const [password,setpassword] = useState("")

    const handleName=(event)=>{
        setname(event.target.value)
    }

    const handleEmail=(event)=>{
      setemail(event.target.value)
  }

  const handlePassword=(event)=>{
    return password.length >= 8
}

    const handleSubmit= async(event)=>{
        event.preventDefault();
        const display = await axios.post("http://localhost:4000/token",{name,email,password})
        console.log(display.data)
        navigate('/')
    };
   

  return (
    <div>
      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Jithin" onChange={handleName} name="name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={handleEmail} name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={handlePassword} name="password" required/>
        </Form.Group>

        <Button type="submit">Sign Up</Button>
        
      </Form>

     
      <div>
        <p>Already have an account ?</p>
        <Link to={`/login`}><a href="">Login</a></Link>
      </div>
    </div>
  );
}

export default SignUp;