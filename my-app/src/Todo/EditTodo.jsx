import React, { useContext, useState } from 'react'
import { todoContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

function EditTodo() {

    const navigate = useNavigate()

    const [data, setdata] = useContext(todoContext)

    const {user} = useParams()

    const editTodo =data [user]


    const [edit, setedit] = useState({
        tasks:editTodo.tasks,
        status:"Completed"

    })

    const handleChange=(event)=>{
        setedit({...edit,[event.target.name]:event.target.value})
    }

    const submit=(event)=>{
        event.preventDefault()
        const newData = [...data]
        newData[user] = edit
        setdata(newData)
        navigate('/')
    }

  return (
    <div>
        <Form onSubmit={submit} style={{width:"50%",margin:"auto",height:"500px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder={editTodo.tasks} disabled onChange={handleChange} name="tasks"/>

                <Form.Label>Status</Form.Label>
                <Form.Control type="text" placeholder={editTodo.status} disabled onChange={handleChange} name="status"/>
            </Form.Group>
            
            <Button type='submit'>Submit</Button>
            
        </Form>
    </div>
  )
}

export default EditTodo