import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
<div className='hero'>
<div className='Hero-contecn'>
    <h1>YOU FEET DESRVE THE BEST</h1>
    <p>Your feet deserve the best and we are here to help with our shoes.

    </p>
    <div className='hero-bt'>
        <button>Shop Now</button>
        <button>Category</button>
<div className='shooping'>
    <p>Also available On</p>
    <div className='brand-icon'>
        <img src="../public/amazon.png" alt="img" />
        <img src="../public/flipkart.png" alt="img" />

    </div>
</div>
    </div>
</div>

<div className='Hero-image'>
    <img src="../public/hero-image.png" alt="" />
</div>
</div>
  )
}

export default Hero;
