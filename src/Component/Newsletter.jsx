import React from 'react'
import '../AllCss/Newletter.css'

const Newsletter = () => {
  return (
    <>
       <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about latest shops and <span>Special offers.</span></p>
        </div>
        

        <div class="form">
            <input type="text" placeholder="Your Email Address"/>
            <button class="normal">Sign Up</button>
        </div>
    </section>

    </>
  )
}

export default Newsletter
