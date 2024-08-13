import React, { useState } from 'react';
import F1 from '../assets/products/f1.jpeg';
import F2 from '../assets/products/ff2.jpeg';
import F3 from '../assets/products/ff3.jpeg';
import F4 from '../assets/products/ff4.jpeg';

const SmProduct1 = () => {
  const [mainImg, setMainImg] = useState(F1);

  const handleImageClick = (img) => {
    setMainImg(img);
  };

  return (
    <>
      <section id="product-details" className="section-p1">
        <div className="single-pro-img">
          <img src={mainImg} width="100%" id="mainImg" alt="Product" />
          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src={F1}
                width="100%"
                className="small-img"
                alt="Thumbnail 1"
                onClick={() => handleImageClick(F1)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={F2}
                width="100%"
                className="small-img"
                alt="Thumbnail 2"
                onClick={() => handleImageClick(F2)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={F3}
                width="100%"
                className="small-img"
                alt="Thumbnail 3"
                onClick={() => handleImageClick(F3)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={F4}
                width="100%"
                className="small-img"
                alt="Thumbnail 4"
                onClick={() => handleImageClick(F4)}
              />
            </div>
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-Shirts</h6>
          <h4>Men's Vintage Newspaper T-Shirt</h4>
          <h2>$25.00</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add To Cart</button>
          <h4>Product Details</h4>
          <span>
            This shirt is a vintage-inspired piece featuring a distinctive black and white newspaper print. The design is characterized by an eclectic mix of patterns, including abstract shapes, lines, and motifs reminiscent of newspaper clippings. The shirt has a casual, relaxed fit with short sleeves and a classic button-up front. The combination of the monochromatic color scheme and the intricate print gives it a unique and trendy look, perfect for making a bold fashion statement.
          </span>
        </div>
      </section>
    </>
  );
};

export default SmProduct1;































// import React from 'react'
// import F1 from '../assets/products/f1.jpeg'
// import F2 from '../assets/products/ff2.jpeg'
// import F3 from '../assets/products/ff3.jpeg'
// import F4 from '../assets/products/ff4.jpeg'



// const SmProduct1 = () => {
//   return (
//     <>
      
//     <section id="product-details" class="section-p1">
//         <div class="single-pro-img">
//             <img src={F1} width="100%" id="mainImg" alt=""/>
//             <div class="small-img-group">
//                 <div class="small-img-col">
//                     <img src={F1} width="100%" class="small-img" alt=""/>
//                 </div>

//                 <div class="small-img-col">
//                     <img src={F2} width="100%" class="small-img" alt=""/>
//                 </div>

//                 <div class="small-img-col">
//                     <img src={F3} width="100%" class="small-img" alt=""/>
//                 </div>

//                 <div class="small-img-col">
//                     <img src={F4} width="100%" class="small-img" alt=""/>
//                 </div>
//             </div>
//         </div>
//         <div class="single-pro-details">
//             <h6>Home / T-Shirts</h6>
//             <h4>Men's Vintage Newpaper T-Shirt</h4>
//             <h2>$25.00</h2>
//             <select>
//                 <option>Select Size</option>
//                 <option>XL</option>
//                 <option>XXL</option>
//                 <option>Small</option>
//                 <option>Large</option>
//             </select>
//             <input type="number" value="1"/>
//             <button class="normal">Add To Cart</button>
//             <h4>Product Details</h4>
//             <span>This shirt is a vintage-inspired piece featuring a distinctive black and white newspaper print. The design is characterized by an eclectic mix of patterns, including abstract shapes, lines, and motifs reminiscent of newspaper clippings. The shirt has a casual, relaxed fit with short sleeves and a classic button-up front. The combination of the monochromatic color scheme and the intricate print gives it a unique and trendy look, perfect for making a bold fashion statement.</span>
//         </div>
//     </section>

//     </>
//   )
// }

// export default SmProduct1
