import React from 'react'
import { Link } from 'react-router-dom'
import '../AllCss/Pagimation.css'

const Pagimation = () => {
  return (
    <>
    <section id="pagination" class="section-p1">
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        {/* <a href="#"><i class="fas fa-long-arrow-alt-right"></i></a> */}
    </section>
    </>
  )
}

export default Pagimation
