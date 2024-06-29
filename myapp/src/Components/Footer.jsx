import React from 'react'
import footer_logo from './Assets/logo_big.png'
import insta_icon from './Assets/instagram_icon.png'
import pinterest_icon from './Assets/pintester_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='mt-40 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Footer Logo and Name */}
          <div className='flex items-center justify-center mb-12'>
            <img src={footer_logo} alt='Footer Logo' className='h-12 mr-2' />
            <p className='text-3xl font-semibold'>QUICKCART</p>
          </div>
      
          {/* Footer Links */}
          <div className='flex justify-center mb-12'>
            <ul className='flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6'>
              <li className='cursor-pointer hover:text-gray-300'>Company</li>
              <li className='cursor-pointer hover:text-gray-300'>Products</li>
              <li className='cursor-pointer hover:text-gray-300'>Offices</li>
              <li className='cursor-pointer hover:text-gray-300'>About</li>
              <li className='cursor-pointer hover:text-gray-300'>Contact</li>
            </ul>
          </div>
      
          {/* Social Icons */}
          <div className='flex justify-center space-x-4'>
            <img src={insta_icon} alt='Instagram Icon' className='h-6 cursor-pointer' />
            <img src={pinterest_icon} alt='Pinterest Icon' className='h-6 cursor-pointer' />
            <img src={whatsapp_icon} alt='WhatsApp Icon' className='h-6 cursor-pointer' />
          </div>
      
          {/* Copyright */}
          <div className='mt-8 border-t border-gray-700 pt-4'>
            <p className='text-center text-sm'>Copyright @ 2024 - All Rights Reserved.</p>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default Footer;