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
import N1 from '../assets/products/n1.jpeg'
import N2 from '../assets/products/n2.jpeg'
import N3 from '../assets/products/n3.jpeg'
import N4 from '../assets/products/n4.jpeg'
import N5 from '../assets/products/n5.jpeg'
import N6 from '../assets/products/n6.jpeg'
import N7 from '../assets/products/n7.jpeg'
import N8 from '../assets/products/n8.jpeg'
import { FaStar, FaShoppingCart  } from "react-icons/fa";


const ShopProduct = () => {
  return (
    <>
      <section id="project1" class="section-p1">
        <div class="product-container">

            <div class="product">
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
                 <Link to={'/'} class="cart"><FaShoppingCart /></Link>
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
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
                <Link to={'/'} class="cart"><FaShoppingCart /></Link>
              
            </div>
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

export default ShopProduct
