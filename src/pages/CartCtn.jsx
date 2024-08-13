import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimesCircle } from "react-icons/fa";
import F1 from '../assets/products/f1.jpeg'
import F2 from '../assets/products/f2.jpeg'
import F3 from '../assets/products/f3.jpeg'


const CartCtn = () => {
  return (
    <>
      
    <section id="cart" class="section-p1">
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> <Link to={'/'}><FaTimesCircle /></Link> </td>
                    <td><img src={F1} alt=""/></td>
                    <td>Vintage Newpaper T-Shirt</td>
                    <td>$25</td>
                    <td><input type="number" value="1"/></td>
                    <td>$25</td>
                </tr>
                <tr>
                    <td><Link to="#"><FaTimesCircle /></Link></td>
                    <td><img src={F2} alt=""/></td>
                    <td>Men's Shirt Colourful Striped Camisa</td>
                    <td>$30</td>
                    <td><input type="number" value="1"/></td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td><Link to ="#"><FaTimesCircle /></Link></td>
                    <td><img src={F3} alt=""/></td>
                    <td>Mens Casual Button Down Shirts</td>
                    <td>$15</td>
                    <td><input type="number" value="1"/></td>
                    <td>$30</td>
                </tr>
            </tbody>
        </table>
    </section>
    </>
  )
}

export default CartCtn
