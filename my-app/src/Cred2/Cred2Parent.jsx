import React, { createContext, useState } from 'react'
import Data from './Cred2Data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cred2Table from './Cred2Table'
import Cred2Create from './Cred2Create'
import ViewCred2 from './ViewCred2'
import Cred2Edit from './Cred2Edit'


const cred2Context = createContext()

function Cred2Parent() {

    const [data, setdata] = useState(Data)

  return (
    <div>
        
        <cred2Context.Provider value ={[data,setdata]}>
             <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Cred2Table/>} /> 
                  <Route path='/create' element={<Cred2Create/>}/>
                  <Route path='/view/:user' element={<ViewCred2/>}/>
                  <Route path='/edit/:user' element={<Cred2Edit/>}/>
                </Routes>
             </BrowserRouter>
        </cred2Context.Provider>

    </div>
  )
}

export default Cred2Parent

export {cred2Context};