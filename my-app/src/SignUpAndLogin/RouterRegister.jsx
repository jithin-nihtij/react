import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import LoginOrSignUp from './LoginOrSignUp'





function RouterRegister() {

   

  return (
    <div>
       
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginOrSignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </BrowserRouter>
      
    </div>
  )
}

export default RouterRegister

// export {signUpContext}