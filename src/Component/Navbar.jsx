import { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FaShoppingBag,  } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import '../AllCss/Navbar.css'

const Navbar = () => {

  const [isNavActive, setIsNavActive] = useState(false);

  const handleBarClick = () => {
    setIsNavActive(true);
  };

  const handleCloseClick = () => {
    setIsNavActive(false);
  };

  return (
    <div>


<section id="header">
      <Link to={'/'}><img src={Logo} alt="logo" /> </Link>

      <div>
        <ul id="navbar" className={isNavActive ? "active" : ""} onClick={handleCloseClick}>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/shop'}>Shop</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li id="bag"> <Link to={'/cart'}><FaShoppingBag /></Link></li>
          <Link to="#" id="close" onClick={handleCloseClick}>
            <i><FaTimes /></i>
          </Link>
        </ul>
      </div>

      <div id="mobile">
        <Link to={'/cart'} className='bagg'><FaShoppingBag /></Link>
        <i id="bar"><FaOutdent  onClick={handleBarClick} /> </i>
      </div>
    </section>
      
    </div>
  )
}

export default Navbar