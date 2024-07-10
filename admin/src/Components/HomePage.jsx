// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import add_product_icon from '../assets/Product_Cart.svg';
// import listProduct from '../assets/Product_list_icon.svg';

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(true);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//             <div className={`lg:w-64 h-screen bg-gray-200  fixed top-16  ${isOpen ? 'block' : 'hidden'} lg:block`}>
//                 <div className="p-4">
//                     <Link to={'/addproduct'}>
//                         <div className="sidebar-item flex items-center p-2 mb-2 mt-4 bg-gray-300 rounded hover:bg-gray-400 transition">
//                             <img src={add_product_icon} className="w-6 h-6 mr-2" alt="Add Product" />
//                             <p>Add Product</p>
//                         </div>
//                     </Link>
//                     <Link to={'/listproduct'}>
//                         <div className="sidebar-item flex items-center p-2 mt-6 bg-gray-300 rounded hover:bg-gray-400 transition">
//                             <img src={listProduct} className="w-6 h-6 mr-2" alt="Product List" />
//                             <p>Product List</p>
//                         </div>
//                     </Link>
//                 </div>
//                 <button
//                     onClick={toggleSidebar}
//                     className="absolute bottom-36 left-4 p-2 bg-blue-500 text-white rounded lg:hidden"
//                 >
//                     {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
//                 </button>
//             </div>
//             {!isOpen && (
//                 <button
//                     onClick={toggleSidebar}
//                     className="fixed bottom-4 left-4 p-2 bg-blue-500 text-white rounded lg:hidden"
//                 >
//                     Open Sidebar
//                 </button>
//             )}
//         </>
//     );
// };

// export default Sidebar;
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
