import React, { useContext } from 'react'
import { cred2Context } from './Cred2Parent'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Cred2Table() {

    const [data,setdata] = useContext(cred2Context)

    const handleDelete=(ind)=>{

      const confirmation = window.confirm('Delete?')

      if(confirmation){
        const updated = data.filter((_,i) => i !==ind)
        setdata(updated)
      }

    }

  return (
    <div>
        
        {data.map((disp,ind)=>
        <>
    
          <p>{ind}</p>
          <h2>{disp.name}</h2>
          <h3>{disp.place}</h3>
          <h4>{disp.age}</h4>
          <Link to={`/view/${ind}`}><Button>View</Button></Link>
          <Link to={`/edit/${ind}`}><Button>Edit</Button></Link>
          <Button onClick={()=>handleDelete(ind)}>Delete</Button>
          
          </>
        )}

<Link to={`/create`}><Button>Create</Button></Link>

    </div>
  )
}

export default Cred2Table