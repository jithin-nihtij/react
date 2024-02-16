import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { cred2Context } from './Cred2Parent'
import { useNavigate, useParams } from 'react-router-dom'

function Cred2Edit() {

    const [data,setdata] =useContext(cred2Context)

    const navigate = useNavigate()

    const {user} = useParams()

    const editData = data[user]

    const [edit, setedit] = useState({
        name:editData.name,
        age:editData.age,
        place:editData.place
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
        <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={editData.name} onChange={handleChange} name="name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder={editData.age} onChange={handleChange} name="age"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Place</Form.Label>
        <Form.Control type="text" placeholder={editData.place} onChange={handleChange} name="place"/>
      </Form.Group>

      <Button type='submit'>Submit</Button>
    </Form>
    </div>
  )
}

export default Cred2Edit