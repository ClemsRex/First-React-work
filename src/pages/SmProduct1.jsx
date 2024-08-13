import React from 'react'

const SmProduct1 = () => {
  return (
    <>
      
    <section id="product-details" class="section-p1">
        <div class="single-pro-img">
            <img src="img/products/f1.jpeg" width="100%" id="mainImg" alt=""/>
            <div class="small-img-group">
                <div class="small-img-col">
                    <img src="img/products/f1.jpeg" width="100%" class="small-img" alt=""/>
                </div>

                <div class="small-img-col">
                    <img src="img/products/ff2.jpeg" width="100%" class="small-img" alt=""/>
                </div>

                <div class="small-img-col">
                    <img src="img/products/ff3.jpeg" width="100%" class="small-img" alt=""/>
                </div>

                <div class="small-img-col">
                    <img src="img/products/ff4.jpeg" width="100%" class="small-img" alt=""/>
                </div>
            </div>
        </div>
        <div class="single-pro-details">
            <h6>Home / T-Shirts</h6>
            <h4>Men's Vintage Newpaper T-Shirt</h4>
            <h2>$25.00</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
            </select>
            <input type="number" value="1"/>
            <button class="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>This shirt is a vintage-inspired piece featuring a distinctive black and white newspaper print. The design is characterized by an eclectic mix of patterns, including abstract shapes, lines, and motifs reminiscent of newspaper clippings. The shirt has a casual, relaxed fit with short sleeves and a classic button-up front. The combination of the monochromatic color scheme and the intricate print gives it a unique and trendy look, perfect for making a bold fashion statement.</span>
        </div>
    </section>

    </>
  )
}

export default SmProduct1
