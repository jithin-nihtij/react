import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import KfcNav from './KfcNav'
import KfcMenu from './KfcMenu'
import KfcRewards from './KfcRewards'
import UseParams from './UseParams'

function KfcRoute() {
  return (

    <div>
        <BrowserRouter>
            <KfcNav/>
            <Routes>
                <Route path='/' element={<KfcMenu/>}/>
                <Route path='/rewards/:username' element={<><KfcRewards/><UseParams/></>}/>
           
            </Routes>
            
        </BrowserRouter>
    </div>
  )
}

export default KfcRoute