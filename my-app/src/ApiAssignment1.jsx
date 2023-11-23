import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function ApiAssignment1() {
    const [first, setfirst] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((disp)=>{
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
            <th>Name</th>
            <th>UsereName</th>
            <th>mail</th>
            <th>Place</th>
            <th>Company</th>
            
            </tr>
        </thead>
        <tbody>
            {first.map((disp)=>
            <tr>
            <td>{disp.id}</td>
            <td>{disp.name}</td>
            <td>{disp.username}</td>
            <td>{disp.email}</td>
            <td>{disp.address.city}</td>
            <td>{disp.company.name}</td>
            </tr>
            )}
            
        </tbody>
    </Table>
        
       
    </div>
  )
}

export default ApiAssignment1