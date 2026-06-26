import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Usestate from './Components/Usestate'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/rrr" element={<Header />} />
        <Route path="/" element={<Body />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/usestate" element={<Usestate />} />



      </Routes>
    </BrowserRouter>
  )
}