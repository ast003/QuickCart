import React from 'react';
import hero_image from '../Assets/hero_image.png';
import arrow from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className='block w-full h-screen relative overflow-hidden'>

      <div className='bg-gradient-to-b from-pink-200 to-white h-full'>
        <div className='relative flex flex-col left-40 top-40'>
          <h2 className='text-2xl font-semibold mb-7'>New Arrivals Only</h2>
          <p className='mb-2 text-6xl font-medium'>
            new <span>👋🏻</span>
          </p>
          <p className='mb-2 text-6xl font-medium'>collections</p>
          <p className='mb-7 text-6xl font-medium'>for everyone</p>
          <button className='bg-red-500 text-white h-12 w-60 rounded-full flex items-center justify-center'>
            Latest Collection
            <img src={arrow} alt="Arrow" className='px-1' />
          </button>
        </div>
        <img className='absolute right-0 top-0 object-cover h-full' src={hero_image} alt="model" />
      </div>
    </div>
  );
};

export default Hero;


