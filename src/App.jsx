import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Newsletter from './Component/Newsletter'
import Footer from './Component/Footer'





const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/home' element={ <Home/> } />
      <Route path='/shop' element={ <Shop/> } />
      <Route path='/blog' element={ <Blog/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/contact' element={ <Contact/> } />
    </Routes>

    <Newsletter/>
    <Footer/>
  

    
    </>
  )
}

export default App
