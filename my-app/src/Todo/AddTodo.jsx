import React, { useContext, useState } from 'react'
import { todoContext } from '../App'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function AddTodo() {

    const [data,setdata] = useContext(todoContext)

    const navigate = useNavigate()

    const [input, setinput] = useState({
        tasks:'',
        status:'pending..'
    })

    const handleChange=(event)=>{
        setinput({...input,[event.target.name]:event.target.value})
    }

    const submit=(event)=>{
        event.preventDefault()

        setdata([...data,input])
        navigate(-1)
        console.log(input)
    }

  return (
    <div>
        
    <Form onSubmit={submit}  style={{width:"50%",margin:"auto",height:"500px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="task" required onChange={handleChange} name="tasks"/>

        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="pending"  disabled onChange={handleChange} name="status"/>

      </Form.Group>
      
      <Button type='submit'>Submit</Button>
      
    </Form>

    </div>
  )
}

export default AddTodo