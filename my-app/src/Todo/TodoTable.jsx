import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { todoContext } from '../App'

function TodoTable() {

  const handleDeleteClick = (ind) => {
    const confirmation = window.confirm('Are you sure you want to delete this task?');

    if (confirmation) {
      
      const updatedData = data.filter((_, i) => i !== ind);
      setData(updatedData);
    }
  };

  const[data,setData]=useContext(todoContext)

  return (
    <div>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Tasks</th>
          <th>Status</th>
          <th>Mark Completed</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((disp,ind)=>
        <tr>
          <td>{ind +1}</td>
          <td>{disp.tasks}</td>
          <td>{disp.status}</td>
          <td><Link to={`/edit/${ind}`}><Button variant='success'>Done</Button></Link></td>
          <td><Button variant='danger'onClick={() => handleDeleteClick(ind)}>Delete</Button></td>
        </tr>
        )}
        
        
      </tbody>
    </Table>

    <div style={{display:"flex",justifyContent:"center"}}>
        <Link to={`/create`}><Button>Create</Button></Link>
        </div>
    </div>
  )
}

export default TodoTable