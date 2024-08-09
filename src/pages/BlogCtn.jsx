import React from 'react'
import '../AllCss/Blog.css'
import B10 from '../assets/blog/b10.jpeg'
import B7 from '../assets/blog/b7.jpg'
import B2 from '../assets/blog/b2.jpeg'
import B4 from '../assets/blog/b4.jpeg'

const BlogCtn = () => {
  return (
    <>
        <section id="blog">
        <div class="blog-box">
            <div class="blog-img">
                <img src={B10} alt=""/>
            </div>
            <div class="blog-details">
                <h4>Timeless Outerwear</h4>
                <p>Complete your look with our timeless black coat, a must-have for any wardrobe. Its classic design and durable material make it a versatile piece that can be worn in...</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>


        <div class="blog-box">
            <div class="blog-img">
                <img src={B7} alt=""/>
            </div>
            <div class="blog-details">
                <h4>Bold and Athletic</h4>
                <p>Our athletic wear, including form-fitting tank tops and vibrant jerseys, is designed for those with an active lifestyle. The breathable, flexible fabrics ensure maximum...</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>


        <div class="blog-box">
            <div class="blog-img">
                <img src={B2} alt=""/>
            </div>
            <div class="blog-details">
                <h4>A Sophisticated Black Coat</h4>
                <p>The coat features a classic design with a structured fit, making it a versatile addition to any wardrobe. Its dark, solid color enhances the overall...</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>


        <div class="blog-box">
            <div class="blog-img">
                <img src={B4} alt=""/>
            </div>
            <div class="blog-details">
                <h4>A Sophisticated Black Coat</h4>
                <p>The coat features a classic design with a structured fit, making it a versatile addition to any wardrobe. Its dark, solid color enhances the overall...</p>
                <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
        </div>
    </section>

    </>
  )
}

export default BlogCtn
