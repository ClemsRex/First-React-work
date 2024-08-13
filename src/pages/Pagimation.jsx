import React from 'react'
import { Link } from 'react-router-dom'
import '../AllCss/Pagimation.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const Pagimation = () => {
  return (
    <>
    <section id="pagination" class="section-p1">
        <Link to={'/'} >1</Link>
        <Link to={'/'}>2</Link>
        <Link to ={'/'} className='icon'><FaLongArrowAltRight /></Link> 
    </section>
    </>
  )
}

export default Pagimation
