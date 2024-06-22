import './Navbar.css'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import React,{useState} from 'react';


const Navbar = () => {
  const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} />
        <p>QuickCart</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}>Men{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='login-cart'>
        <button>Login</button>
        <img src={cart_icon} />
        <div className='cart-count'>1</div>
      </div>
    </div>
  )
};

export default Navbar;
