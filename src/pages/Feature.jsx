import React from 'react'
import '../AllCss/Feature.css'
import F1 from '../assets/features/f1.png'
import F2 from '../assets/features/f2.png'
import F3 from '../assets/features/f3.png'
import F4 from '../assets/features/f4.png'
import F5 from '../assets/features/f5.png'
import F6 from '../assets/features/f6.png'

const Feature = () => {
  return (
    <>
      <section id="feature" class="section-p1">
        <div class="feature-box">
            <img src={F1} alt="" />
            <h6>Free Shipping</h6>
        </div>

        
        <div class="feature-box">
            <img src={F2} alt=""/>
            <h6>Online Order</h6>
        </div>

        <div class="feature-box">
            <img src={F3} alt=""/>
            <h6>Save Money</h6>
        </div>

        <div class="feature-box">
            <img src={F4} alt=""/>
            <h6>Promotions</h6>
        </div>

        <div class="feature-box">
            <img src={F5} alt=""/>
            <h6>Happy Sells</h6>
        </div>

        <div class="feature-box">
            <img src={F6} alt=""/>
            <h6>24/7 Support</h6>
        </div>


    </section>

    </>
  )
}

export default Feature
