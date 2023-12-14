import React, { useContext } from 'react'
import { todoContext } from '../App'
import { useParams } from 'react-router-dom'

function ViewTodo() {

    const [data,setdata] = useContext(todoContext)

    const {user} = useParams()

    const viewData = data[user]

  return (
    <div>

        <p>{viewData.tasks}</p>
        <p>{viewData.status}</p>
        
    </div>
  )
}

export default ViewTodo