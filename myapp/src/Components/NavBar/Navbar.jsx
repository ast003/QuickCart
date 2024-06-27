import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='navbar bg-white shadow-lg p-4 flex items-center justify-between'>
      <div className='nav-logo flex items-center'>
        <img src={logo} alt="Logo" className='h-8 w-8' />
        <p className='ml-2 text-lg font-bold'>QuickCart</p>
      </div>
      <div className='md:hidden flex items-center'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-700 focus:outline-none'>
          <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
            )}
          </svg>
        </button>
        <Link to='/cart' className='relative ml-4'>
          <img src={cart_icon} alt="Cart" className='h-6 w-6' />
          <div className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-xs'>1</div>
        </Link>
      </div>
      <ul className={` ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:flex md:space-x-8 md:items-center absolute md:static top-14 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
        <li onClick={() => { setMenu("shop"); setIsMenuOpen(false); }} className="relative mt-2 md:mt-0">
          <Link to='/'>Shop</Link>
          {menu === "shop" && <hr className="absolute bottom-0 left-0 w-full border-b-2 border-blue-500" />}
        </li>
        <li onClick={() => { setMenu("men"); setIsMenuOpen(false); }} className="relative mt-2 md:mt-0">
          <Link to='/men'>Men</Link>
          {menu === "men" && <hr className="absolute bottom-0 left-0 w-full border-b-2 border-blue-500" />}
        </li>
        <li onClick={() => { setMenu("women"); setIsMenuOpen(false); }} className="relative mt-2 md:mt-0">
          <Link to='/women'>Women</Link>
          {menu === "women" && <hr className="absolute bottom-0 left-0 w-full border-b-2 border-blue-500" />}
        </li>
        <li onClick={() => { setMenu("kids"); setIsMenuOpen(false); }} className="relative mt-2 md:mt-0">
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr className="absolute bottom-0 left-0 w-full border-b-2 border-blue-500" />}
        </li>
        <li className='login-cart flex md:hidden mt-4'>
          <Link to='/login' className='bg-blue-500 text-white px-4 py-2 rounded w-full text-center'>Login</Link>
        </li>
      </ul>
      <div className='login-cart hidden md:flex items-center space-x-4'>
        <Link to='/login'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>Login</button>
        </Link>
        <Link to='/cart' className='relative'>
          <img src={cart_icon} alt="Cart" className='h-6 w-6' />
          <div className='bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 text-xs'>1</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
