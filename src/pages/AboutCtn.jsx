import React from 'react'
import A1 from '../assets/about/a1.jpeg'

const AboutCtn = () => {
  return (
    <>
      <section id="about-head" className="section-p1">
        <img src={A1} alt=""/>
        <div>
            <h2>Who We Are?</h2>
            <p>Welcome to CARA, your one-stop destination for all your shopping needs. We pride ourselves on offering a wide range of high-quality products, from the latest fashion trends to cutting-edge electronics and everything in between. Our mission is to provide a seamless and enjoyable shopping experience, combining great value with exceptional customer service. Whether you're looking for everyday essentials or unique finds, we're here to help you discover the perfect products to suit your lifestyle. Thank you for choosing CARA happy shopping!
            </p>

            <abbr title="">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</abbr>

            <br/><br/>

            {/* <marquee  bgcolor ="#ccc" loop ="-1" scrollamout = "5" width ="100%">Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee> */}
        </div>
    </section>
    </>
  )
}

export default AboutCtn
