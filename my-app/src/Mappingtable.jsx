import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function Mappingtable() {
    const [first, setfirst] = useState(
    [
        {
            number:"1",
            mark:"50",
            Fname:"Jithin",
            Uname:"nihtij"
        },
        {
            number:"2",
            mark:"50",
            Fname:"Raheem",
            Uname:"R4heem"
        }
    ])
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {first.map((disp=>
            
        <tr>
          <td>{disp.number}</td>
          <td>{disp.mark}</td>
          <td>{disp.Fname}</td>
          <td>{disp.Uname}</td>
        </tr>
        ))}
        
        
        
      </tbody>
    </Table>
    </div>
  )
}

export default Mappingtable