import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function ApiAssignment2() {

    const [first, setfirst] = useState([])

    useEffect(() => {
     axios.get('https://jsonplaceholder.typicode.com/todos').then((disp)=>{
        setfirst(disp.data)
        console.log(disp.data)
     })
    }, [])
    
  return (
    <div>

    <Table striped bordered hover>
        <thead>
            <tr>
            <th>id</th>
            <th>title</th>
            <th>UserId</th>
           
            
            </tr>
        </thead>
        <tbody>
            {first.map((disp)=>
            <tr>
            <td>{disp.id}</td>
            <td>{disp.title}</td>
            <td>{disp.userId}</td>
            </tr>
            )}
            
        </tbody>
    </Table>
        
    </div>
  )
}

export default ApiAssignment2