import React from 'react';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='block w-full h-screen relative overflow-hidden'>
      <div className='bg-gradient-to-b from-pink-300 to-white h-full'>
        <img className='absolute right-0 top-0 object-cover h-full' src={hero_image} alt="model" />
      </div>
    </div>
  );
};

export default Hero;


