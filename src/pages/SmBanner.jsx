import React from 'react'
import '../AllCss/FirstBanner.css'

const SmBanner = () => {
  return (
    <>
       <section id="sm-banner" class="section-p1">
        <div class="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at CARA</span>
            <button class="white">Learn More</button>
        </div>


        <div class="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcoming season</h2>
            <span>The best simple T-shirts at CARA</span>
            <button class="white">Collections</button>
        </div>
    </section>

    <section id="banner3">
        <div class="banner-box">
            <h2>SEASONALSALE</h2>
            <h3>Winter Collection -50% OFF</h3>
        </div>

        <div class="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring/Summer 2024</h3>
        </div>
        
        <div class="banner-box banner-box3">
            <h2>T-SHITS</h2>
            <h3>New Trending Prints</h3>
        </div>
    </section>

    </>
  )
}

export default SmBanner
