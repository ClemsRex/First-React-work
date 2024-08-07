import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Footer from './Component/Footer'




const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/' element={ <Shop/> } />
    </Routes>

    <Footer/>
  

    
    </>
  )
}

export default App
