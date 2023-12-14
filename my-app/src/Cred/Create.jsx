// import React, { useContext, useState } from 'react'
// import { Button, Form } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
// import { crudContext } from '../App'
// // import ViewPage from './ViewPage'

// function Create() {

//   const[data,setData]=useContext(crudContext)
  
//   const navigate=useNavigate()
  
  

//   const [input, setInput] = useState({
//     Name:"",
//     Age:"",
//     username:""
//   })

//   const handleChange=(event)=>{
//     setInput({...input,[event.target.name]:event.target.value})
//   }

 

//   const submit=(event)=>{
//     event.preventDefault();
    
//     setData([...data,input])
//     navigate(-1)
    
   

    
// }

//   return (
//     <div>
    // <Form onSubmit={submit} style={{width:"50%",margin:"auto",height:"500px",display:"flex",justifyContent:"center",flexDirection:"column"}}>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="text" placeholder="name" onChange={handleChange} name="Name"/>

    //     <Form.Label>Age</Form.Label>
    //     <Form.Control type="text" placeholder="age" onChange={handleChange} name="Age"/>

    //     <Form.Label>User</Form.Label>
    //     <Form.Control type="text" placeholder="username" onChange={handleChange} name="username"/>
    //   </Form.Group>
      
    //   <Button type='submit'>Submit</Button>
      
    // </Form>

//     </div>
//   )
// }

// export default Create
