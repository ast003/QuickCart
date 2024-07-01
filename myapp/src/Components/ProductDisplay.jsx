import React from 'react'
import star_icon from './Assets/star_icon.png'
import star_dull_icon from './Assets/star_dull_icon.png'
const ProductDisplay = (props) => {
  const {product}=props;
  return (
    <div>
      <div className='left-display'>
        <div className='image-list'>
          <img src={product.image}/>
          <img src={product.image}/>
          <img src={product.image}/>
          <img src={product.image}/>
        </div>
        <div className='product-display'>
          <img className='main-image' src={product.image}/>
        </div>
      </div>
      <div className='right-display'>
      <h1>{product.name}</h1>
      <div className='stars'>
        <img src={star_icon}/>
        <img src={star_icon}/>
        <img src={star_icon}/>
        <img src={star_icon}/>
        <img src={star_dull_icon}/>
        <p>(122)</p>
      </div>
      <div className='prices'>
        <div className='old_price'>${product.old_price}</div>
        <div className='new_price'>${product.new_price}</div>
      </div>
      <div className='detailed-description'>
      Stay warm and stylish with our premium men’s jacket. Crafted from high-quality materials, it offers exceptional comfort and durability. Perfect for any occasion, this jacket combines functionality with a modern design.
      </div>
      <div className='size'>
        <h1>Select Size</h1>
        <div className='display-right-size'>
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
      </div>
      <button>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
