import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WizNav from './WizNav'
import WizHome from './WizHome'
import WizStores from './WizStores'
import WizPotions from './WizPotions'
import WizStory from './WizStory'
import WizLocation from './WizLocation'

function WizRoute() {
  return (
    <div>
        <BrowserRouter>
        <WizNav/>
        <Routes>
            <Route path='/' element={<WizHome/>}/>
            <Route path='/stores' element={<WizStores/>}/>
            <Route path='/potions'element={<WizPotions/>}/>
            <Route path='/story' element={<WizStory/>}/>        
            <Route path='/locations' element={<WizLocation/>}/>
        </Routes>
        

        </BrowserRouter>
        
    </div>
  )
}

export default WizRoute