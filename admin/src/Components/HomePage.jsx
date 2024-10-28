import React from 'react';
import { Link } from 'react-router-dom';
import add_product_icon from '../assets/Product_Cart.svg';
import listProduct from '../assets/Product_list_icon.svg';

const HomePage = () => {
    return (
        <div className="h-screen w-64 flex flex-col mt-16 m-8">
            <Link
                to="/addproduct"
                className="w-full max-w-xs p-4 mb-8 bg-blue-500 text-white rounded flex items-center justify-center transition transform hover:scale-105"
            >
                <img src={add_product_icon} className="w-6 h-6 mr-2" alt="Add Product" />
                <span>Add Product</span>
            </Link>
            <Link
                to="/listproduct"
                className="w-full max-w-xs p-4 bg-green-500 text-white rounded flex items-center justify-center transition transform hover:scale-105"
            >
                <img src={listProduct} className="w-6 h-6 mr-2" alt="Product List" />
                <span>Product List</span>
            </Link>
        </div>
    );
};

export default HomePage;
