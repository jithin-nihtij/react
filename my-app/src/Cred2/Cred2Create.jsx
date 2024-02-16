import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { cred2Context } from './Cred2Parent'
import { useNavigate } from 'react-router-dom'

function Cred2Create() {

    const [data,setdata] = useContext(cred2Context)
    const navigate = useNavigate()


    const [input, setinput] = useState(
      {name:"",
      age:"",
      place:""}
    )

    const handleChange=(event)=>{
      setinput({...input,[event.target.name]:event.target.value})
    }

    const submit=(event)=>{
      event.preventDefault();
      setdata([...data,input])

      navigate(-1)
    }



  return (

    <div>
        
        
    <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="John Doe" onChange={handleChange} name="name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="21" onChange={handleChange} name="age"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Place</Form.Label>
        <Form.Control type="text" placeholder="Calicut" onChange={handleChange} name="place"/>
      </Form.Group>

      <Button type='submit'>Submit</Button>

    </Form>

       

    </div>
  )
}

export default Cred2Create