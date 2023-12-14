// import React, { useContext } from 'react'
// import { todoContext } from '../App'
// import { useNavigate, useParams } from 'react-router-dom'

// function DeleteTodo() {

//     const [data,setData] = useContext(todoContext)

//     const {user} = useParams()

//     const navigate = useNavigate()

//     const handleDelete =()=>{

//     const Delete = data.filter((del,i)=>i!=user)    

//     setData(Delete)

//     navigate('/')
//     }
//   return (
//     <div> 
        
//         <h1>Are you sure you want to delete</h1>
//         <button onClick={()=>navigate(-1)}>Cancel</button>
//         <button onClick={handleDelete}>Delete</button>
//     </div>
//   )
// }

// export default DeleteTodo