import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return ( 
    <div>
      <img src={props.banner}/>
    </div>
  )
}

export default ShopCategory
