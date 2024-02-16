import React, { useContext } from 'react'
import { cred2Context } from './Cred2Parent'
import { useParams } from 'react-router-dom'

function ViewCred2() {
    

    const [data,setdata] = useContext(cred2Context)

    const {user} =useParams()

    const viewData = data[user]

  return (
    <div>
        <p>{viewData.name}</p>
        <p>{viewData.age}</p>
        <p>{viewData.place}</p>
    </div>
  )
}

export default ViewCred2