import React from 'react'

const Item = (props) => {
  return (
    <div className='w-60 transform transition-transform duration-300 hover:scale-105'>
      <img className='mb-6 'src={props.image}></img>
      <p className='text-xs'>{props.name}</p>
      <div className='item-prices text-xs mb-4 font-semibold'>
         ${props.new_price}<span className='line-through text-slate-500 px-2'>${props.old_price}</span>
        </div>
    </div>
  )
}

export default Item
