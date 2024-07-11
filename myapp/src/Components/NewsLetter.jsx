
import React from 'react';

const NewsLetter = () => {
  return (
    <div className='mt-10 w-3/4  mx-auto p-6 bg-gradient-to-b from-pink-100 to-white text-center'>
      <h1 className='text-4xl font-semibold mt-20 mb-8'>Get Exclusive Offers On Your Email</h1>
      <p className='text-gray-700-2xl font-medium mb-12'>Subscribe to our Newsletter and stay updated</p>
      <div className='flex justify-center items-center'>
        <input
          type='email'
          placeholder='Your E-mail id'
          className='p-3 border border-gray-300 rounded-l-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button className='p-3 px-6 bg-gray-950 text-white rounded-r-lg hover:bg-gray-500 transition-colors duration-300'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;


