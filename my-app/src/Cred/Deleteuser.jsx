// import React, { useContext } from 'react'
// import { crudContext } from '../App'
// import { useNavigate, useParams } from 'react-router-dom'

// function Deleteuser() {

//     const[data,setData] = useContext(crudContext)

//     const {user} = useParams()

//     const navigate = useNavigate()

//     const handleDelete = () =>
//     {
//         const Delete = data.filter((del,i)=>i!= user)

//         setData(Delete)

//         navigate("/")
//     }
    


//   return (
//     <div>

        // <h1>Are you sure you want to delete</h1>
        // <button onClick={()=>navigate(-1)}>Cancel</button>
        // <button onClick={handleDelete}>Delete</button>

//     </div>
//   )
// }

// export default Deleteuser