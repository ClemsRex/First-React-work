import React from 'react'
import '../AllCss/Product.css'
import { Link } from 'react-router-dom'
import N1 from '../assets/products/n1.jpeg'
import N2 from '../assets/products/n2.jpeg'
import N3 from '../assets/products/n3.jpeg'
import N4 from '../assets/products/n4.jpeg'
import N5 from '../assets/products/n5.jpeg'
import N6 from '../assets/products/n6.jpeg'
import N7 from '../assets/products/n7.jpeg'
import N8 from '../assets/products/n8.jpeg'
import { FaStar, FaShoppingCart  } from "react-icons/fa"

const Product2 = () => {
  return (
    <>
      <section id="project1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Morden Design</p>
        <div class="product-container">
            <div class="product">
                <img src={N1} alt=""/>
                <div class="des">
                    <span>ZAFUL</span>
                    <h5>Fall Half Button Long Sleeves Polo Shirt</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$25</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N2} alt=""/>
                <div class="des">
                    <span>Burgundy</span>
                    <h5>T-shirt de homem de manga comprida</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$20</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N3} alt=""/>
                <div class="des">
                    <span>Crewneck</span>
                    <h5>Women's Pima Cotton Tee</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$25</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N4} alt=""/>
                <div class="des">
                    <span>Shein</span>
                    <h5>Men's Drawstring Waist Letter</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$15</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N5} alt=""/>
                <div class="des">
                    <span>INCERUN</span>
                    <h5>Summer Knitted Casual Shirts</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$17</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N6} alt=""/>
                <div class="des">
                    <span>SHEIN</span>
                    <h5>Women Casual Long Sleeve Plaid</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$35</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N7} alt=""/>
                <div class="des">
                    <span>Addalyne</span>
                    <h5>Men's Straight Slim Fit Shorts</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$25</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
            <div class="product">
                <img src={N8} alt=""/>
                <div class="des">
                    <span>SHEIN</span>
                    <h5>Corduroy Ethnic Pattern Stitching</h5>
                    <div class="star">
                       <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <h4>$25</h4>
                </div>
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Product2
