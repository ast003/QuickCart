import { useState,useEffect } from 'react';
import Item from './Item'

const Popular = () => {
  const [popular,setPopular]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/popularInwoman')
   .then((response)=>response.json())
   .then((data)=>setPopular(data));
},[])
  return (
    <div className='popular'>
      <h1 className='text-4xl font-semibold flex justify-center mb-4'>POPULAR IN WOMEN</h1>
      <hr className='border-t-4 border-black w-1/6 mx-auto mb-12' />
      <div className='flex gap-x-16 justify-center'>
        {popular.map((item, i) => {
          return <Item key={i} 
          id={item.id} 
          name={item.name} 
          image={item.image} 
          new_price={item.new_price} 
          old_price={item.old_price} />
        }
        )}
      </div>
    </div>
  )
}

export default Popular
