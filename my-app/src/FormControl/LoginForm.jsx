import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

function LoginForm() {

    const [username, setUsername] = useState(" ")

    const [password, setPassword] = useState(" ")

    const [gender, setGender] = useState(" ")

    const [degree, setDegree] = useState("") 

    const [plusTwo, setPlusTwo] = useState(" ")

    const setuser =(event)=>{

        setUsername(event.target.value)
    }

    const setpass = (event)=>{
        setPassword(event.target.value)
    }

    const setgend = (event) =>{
        setGender(event.target.value)
    }

    const setqual1=(event)=>{
        setDegree(event.target.value)
    }

    const setqual2=(event)=>{
        setPlusTwo(event.target.value)
    }
    
    const submit=(event)=>{
        event.preventDefault()

        console.log("username",username);
        console.log("password",password);
        console.log("Gender",gender);
        console.log("Qualification",degree);
        console.log("Qualification",plusTwo);
    }



  return (
    <div>
        <Form onSubmit={submit} style={{width:"50%",margin:"auto"}}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2" >
                Email
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text"  placeholder="username" value={username} onChange={setuser}/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
                Password
            </Form.Label>
            <Col sm="10">
                <Form.Control type="password" placeholder="Password" value={password} onChange={setpass}/>
            </Col>

           <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            Plus Two
             <Form.Check aria-label="option 1" id="" value={"plus two"} onChange={setqual1}/> 
             Degree
             <Form.Check aria-label="option 2" id="" value={"degree"} onChange={setqual2}/>

            Male
            <Form.Check type="radio" aria-label="radio 1" name="gender" value={'male'} onChange={setgend}/>
            Female
            <Form.Check type="radio" aria-label="radio 2" name="gender" value={'female'} onChange={setgend}/>


            <Button type='submit' variant="primary">submit</Button>
            </Form.Group>
        </Form>
  </div>
  )
}

export default LoginForm