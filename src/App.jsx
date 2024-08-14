import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop'
import Navbar from './Component/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SmProduct from './pages/SmProduct'
import Blog from './pages/Blog'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Newsletter from './Component/Newsletter'
import Footer from './Component/Footer'





const App = () => {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>  
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/shop' element={ <Shop/> } />
      <Route path='/smproduct' element={ <SmProduct/> } />
      <Route path='/blog' element={ <Blog/> } />
      <Route path='/about' element={ <About/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/cart' element={ <Cart/> } />
    </Routes>

    <Newsletter/>
    <Footer/>
  

    
    </>
  )
}

export default App
