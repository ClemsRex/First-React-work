import React from 'react'
import '../AllCss/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <>



    
<section id="header">
        <Link to={'#'}><img src={Logo} alt="logo"/></Link>

        <div>
            <ul id="navbar">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'#'}>Shop</Link></li>
                <li><Link to={'#'}>Blog</Link></li>
                <li><Link to={'#'}>About</Link></li>
                <li><Link to={'#'}>Contact</Link></li>
                {/* <li id="bag"><a className="active"  href="cart.html"><i className="fas fa-bag-shopping"></i></a></li>
                <a href="#" id="close"><i className="fas fa-times"></i></a> */}
            </ul>
        </div>
{/* 
        <div id="mobile">
            <a href="cart.html"><i className="fas fa-bag-shopping"></i></a>
            <i id="bar" className="fas fa-outdent"></i>
        </div> */}
    </section>
    </>
  )
}

export default Navbar
