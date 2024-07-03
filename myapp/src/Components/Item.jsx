import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='w-60 transform transition-transform duration-300 hover:scale-105'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='mb-6 'src={props.image}/></Link>
      <p className='text-xs'>{props.name}</p>
      <div className='item-prices text-xs mb-6 font-semibold'>
         ${props.new_price}<span className='line-through text-slate-500 px-2'>${props.old_price}</span>
        </div>
    </div>
  )
}

export default Item
