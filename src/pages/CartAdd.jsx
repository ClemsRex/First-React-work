import React from 'react'

const CartAdd = () => {
  return (
    <>
     <section id="cart-add" className="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter your coupon"/>
                <button className="normal">Apply</button>
            </div>
        </div>

        <div id="subtotal">
            <h3>Cart Total</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>$70</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong>$70</strong></td>
                </tr>
            </table>
            <button className="normal">Proceed to chechout</button>
        </div>
    </section> 
    </>
  )
}

export default CartAdd
