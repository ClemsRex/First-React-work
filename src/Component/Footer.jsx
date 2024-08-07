import React from 'react'
import '../AllCss/Footer.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import App from '../assets/pay/app.jpg'
import Play from '../assets/pay/play.jpg'
import Pay from '../assets/pay/pay.png'

const Footer = () => {
  return (
    <>
       <footer className="section-p1">
        <div class="col">
            <img className="logo" src={Logo} alt=""/>
            <h4>Contact</h4>
            <p> <strong>Address :</strong> 562 Wellington Road, Street 32,San Francisco
            </p>
            <p><strong>Phone :</strong>+01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>Hours :</strong>10:00 - 12:00, Mon - Sat</p>
            <div className="follow">
                <h4>Follow Us</h4>
                {/* <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div> */}
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <Link to="#">About Us</Link>
            <Link to="#">Delivery Information</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms & Condition</Link>
            <Link to="#">Contact Us</Link>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <Link to="#">Sign In</Link>
            <Link to="#">View Cart</Link>
            <Link to="#">My Wishlist</Link>
            <Link to="#">Track My Order</Link>
            <Link to="#">Help</Link>
        </div>

        <div className="col install">
            <h4>Install App</h4>

            <p>From App Store or Goggle Play Store</p>

            <div className="row">
                <img src={App} alt=""/>
                <img src={Play} alt=""/>
            </div>
            <p>Secured Payment Gateways</p>
            <img src={Pay} alt=""/>
        </div>
        <div className="copyright">
            <p>&copy; 2024. Rex ECommerce Website</p>
        </div>
    </footer>
    </>
  )
}

export default Footer

