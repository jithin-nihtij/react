import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Secondrow from '../Starbucks/Secondrow'
import Starboy from '../landingpage/Starboy'
import Nvbar from '../landingpage/Nvbar'
import AfterHours from '../landingpage/AfterHours'
import HouseofBalloons from '../landingpage/HouseofBalloons'

function Router1() {

  return (
    <div>
       <BrowserRouter>
        <Routes>

            <Route path='/' element={<Nvbar/>}/>
            <Route path='/Albums' element={<><AfterHours/><Starboy/><HouseofBalloons/></>}/>
            <Route path='StarBucks' element={<Secondrow/>}/>


        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default Router1