import React from 'react'
import Hero from '../pages/Hero.jsx'
import '../AllCss/Home.css'
import Feature from '../pages/Feature.jsx'
import Product from '../pages/Product.jsx'
import FirstBanner from './FirstBanner.jsx'
import Product2 from './Product2.jsx'
import SmBanner from './SmBanner.jsx'
import Newsletter from './Newsletter.jsx'

const Home = () => {
  return (
    <>
      <Hero/>
      <Feature/>
      <Product/>
      <FirstBanner/>
      <Product2/>
      <SmBanner/>
      <Newsletter/>
    </>
  )
}

export default Home
