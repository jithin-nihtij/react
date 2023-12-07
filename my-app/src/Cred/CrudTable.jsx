import React, { useContext } from 'react'
import { Button, Table } from 'react-bootstrap'
import { crudContext } from '../App'
import { Link } from 'react-router-dom';
import ViewPage from './ViewPage';

function CrudTable() {

  const[data,setData]=useContext(crudContext)
  console.log(data);

  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Username</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((disp,ind)=>
        <tr>
          <td>{ind +1}</td>
          <td>{disp.Name}</td>
          <td>{disp.Age}</td>
          <td>{disp.username}</td>
          <td><Link to={`/view/${ind}`}><Button variant='primary'>View</Button></Link></td>
          <td><Link to={`/edit/${ind}`}><Button variant='success'>Edit</Button></Link></td>
          <td><Link to={`/delete/${ind}`}><Button variant='danger'>Delete</Button></Link></td>
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

export default CrudTable