import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/Navbar'
import './App.css'
import Signup from './component/Signup'
import Home from './component/Home'
import Eventhandling from './component/Eventhandling'
import{SnackbarProvider} from 'notistack'



const App = () => {
  return (
    <div>
      <SnackbarProvider >
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/Signup' element={<Signup />} />
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/Home'element={<Home/>}/> */}
          <Route path='/Eventhandling' element={<Eventhandling/>} />
        </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App