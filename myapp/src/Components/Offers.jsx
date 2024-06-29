import React from 'react';
import exclusive_image from './Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='flex justify-center items-center h-screen mt-24'>
      <div className='bg-gradient-to-b from-pink-100 to-white w-8/12 p-8 flex flex-row justify-between items-center relative'>
        <div className='text-left px-10'>
          <h1 className='text-6xl font-medium'>Exclusive</h1>
          <h1 className='text-6xl font-medium'>Offers For You</h1>
          <p className='mt-4 text-xl font-medium'>ONLY ON BEST SELLER PRODUCTS</p>
          <button className='mt-4 px-8 py-4 bg-red-500 text-white rounded-full'>Check Now</button>
        </div>
        <div className='w-1/2'>
          <img src={exclusive_image} alt='Exclusive' className='max-w-full h-auto' />
        </div>
      </div>
    </div>
  );
}

export default Offers;
