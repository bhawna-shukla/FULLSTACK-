import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import './App.css'
import Signup from './component/Signup'
import Home from './component/Home'
import Eventhandling from './component/Eventhandling'
import{SnackbarProvider} from 'notistack'
import Login from './component/Login'
import Contact from './component/Contact'
import Manageuser from './component/Manageuser'






const App = () => {
  return (
    <div>
      <SnackbarProvider >
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* always start with  capital letter */}

          <Route path='/Signup' element={<Signup />} />
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/Home'element={<Home/>}/> */}
          <Route path='/Eventhandling' element={<Eventhandling/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Manageuser' element={<Manageuser/>} />
          
         
          

         
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App