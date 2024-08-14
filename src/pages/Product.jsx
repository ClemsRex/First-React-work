import React from 'react'
import '../AllCss/Product.css'
import { Link } from 'react-router-dom'
import F1 from '../assets/products/f1.jpeg'
import F2 from '../assets/products/f2.jpeg'
import F3 from '../assets/products/f3.jpeg'
import F4 from '../assets/products/f4.jpeg'
import F5 from '../assets/products/f5.jpeg'
import F6 from '../assets/products/f6.jpeg'
import F7 from '../assets/products/f7.jpeg'
import F8 from '../assets/products/f8.jpeg'
import { FaStar, FaShoppingCart  } from "react-icons/fa";



const Product = () => {
  return (
    <>
       <section id="project1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Morden Design</p>
        <div class="product-container">
            <div class="product" >
                <img src={F1} alt=""/>
                <div class="des">
                    <span>Prowallert</span>
                    <h5>Vintage Newpaper T-Shirt</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$25</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={F2} alt=""/>
                <div class="des">
                    <span>Igivealittle</span>
                    <h5>Men's Shirt Colourful Striped Camisa</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$30</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
              
            </div>
            <div class="product">
                <img src={F3} alt=""/>
                <div class="des">
                    <span>Gzwyht</span>
                    <h5>Mens Casual Button Down Shirts</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$15</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
              
            </div>
            <div class="product">
                <img src={F4} alt=""/>
                <div class="des">
                    <span>Funnymugs</span>
                    <h5>Vintage Floral Men Print Hawaiian Shirt</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$25</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={F5} alt=""/>
                <div class="des">
                    <span>GRACE KARIN</span>
                    <h5>Button Down Shirts for Women Peplum</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$15</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={F6} alt=""/>
                <div class="des">
                    <span>HISNN</span>
                    <h5>Vintage Washed Blue Baggy Jeans</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$35</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={F7} alt=""/>
                <div class="des">
                    <span>Jive Blouse</span>
                    <h5>Green Classic 1940s Vintage Style</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$22</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={F8} alt=""/>
                <div class="des">
                    <span>DENGSS</span>
                    <h5>Flap Pocket Denim Jacket</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$35</h4>
                </div>
                <Link to={'/cart'} class="cart"><FaShoppingCart /></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Product
