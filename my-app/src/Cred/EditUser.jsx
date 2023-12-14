// import React, { useContext, useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { crudContext } from '../App'
// import { useNavigate, useParams } from 'react-router-dom'

// function EditUser() {

//   const navigate = useNavigate()
//   const[data,setData]=useContext(crudContext)
//   const {user} = useParams()

//   const editData = data[user]

//   const [input, setInput] = useState({
//     Name:editData.Name,
//     Age:editData.Age,
//     username:editData.username
//   })

//   const handleChange=(event)=>{
//     setInput({...input,[event.target.name]:event.target.value})
//   }

//  const submit=(event)=>{
//     event.preventDefault();
//     setInput(data[user]=input);
//     navigate('/')
//  }

//   return (
//     <div>
//        <Form onSubmit={submit} style={{width:"50%",margin:"auto",height:"500px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder={editData.Name} onChange={handleChange} name="Name"/>

//         <Form.Label>Age</Form.Label>
//         <Form.Control type="text" placeholder={editData.Age} onChange={handleChange} name="Age"/>

//         <Form.Label>User</Form.Label>
//         <Form.Control type="text" placeholder={editData.username} onChange={handleChange} name="username"/>
//       </Form.Group>
      
//       <Button type='submit'>Submit</Button>
      
//     </Form>
//     </div>
//   )
// }

// export default EditUser