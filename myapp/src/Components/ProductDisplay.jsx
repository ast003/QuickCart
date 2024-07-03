// import React, { useContext } from 'react';
// import star_icon from './Assets/star_icon.png';
// import star_dull_icon from './Assets/star_dull_icon.png';
// import { ShopContext } from '../Context/ShopContext';

// const ProductDisplay = (props) => {
//   const { product } = props;
//   const {addToCart}=useContext(ShopContext);
//   return (
//     <div className="flex flex-wrap">
//       <div className="w-full md:w-1/2 p-4">
//         <div className="flex flex-col md:flex-row">
//           <div className="snap-x">
//             <img className="w-36 h-36 object-cover mx-6 mb-6 snap-center" src={product.image} alt="Product" />
//             <img className="w-36 h-36 object-cover m-6 snap-center" src={product.image} alt="Product" />
//             <img className="w-36 h-36 object-cover m-6 snap-center" src={product.image} alt="Product" />
//             <img className="w-36 h-36 object-cover m-6 snap-center" src={product.image} alt="Product" />
//           </div>
//           <div className="flex-1">
//             <img className="w-full h-auto object-cover" src={product.image} alt="Main Product" />
//           </div>
//         </div>
//       </div>
//       <div className="w-full md:w-1/2 p-4">
//         <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
//         <div className="flex items-center mb-4">
//           <img className="w-6 h-6" src={star_icon} alt="Star" />
//           <img className="w-6 h-6" src={star_icon} alt="Star" />
//           <img className="w-6 h-6" src={star_icon} alt="Star" />
//           <img className="w-6 h-6" src={star_icon} alt="Star" />
//           <img className="w-6 h-6" src={star_dull_icon} alt="Star" />
//           <p className="ml-2">(122)</p>
//         </div>
//         <div className="flex items-center mt-12">
//           <div className="text-gray-500 line-through mr-2">${product.old_price}</div>
//           <div className="text-red-500 text-xl">${product.new_price}</div>
//         </div>
//         <div className="mb-8 mt-8">
//           <p className="text-sm">Stay warm and stylish with our premium men’s jacket. Crafted from high-quality materials, it offers exceptional comfort and durability. Perfect for any occasion, this jacket combines functionality with a modern design.</p>
//         </div>
//         <div className="mb-4">
//           <h2 className="text-xl text-gray-500 font-semibold mb-2">Select Size</h2>
//           <div className="flex space-x-2 mt-8">
//             <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">S</div>
//             <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">M</div>
//             <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">L</div>
//             <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">XL</div>
//             <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">XXL</div>
//           </div>
//         </div>
//         <button onClick={()=>{addToCart(product.id)}}className="bg-red-500 text-white px-6 py-3 hover:bg-red-600 mt-4">ADD TO CART</button>
//         <p className="mt-12"><span className="font-semibold">Category:</span> Men, Jacket</p>
//         <p><span className="font-semibold">Tags:</span> Modern, Latest</p>
//       </div>
//     </div>
//   );
// }
// export default ProductDisplay;
import React, { useContext } from 'react';
import star_icon from './Assets/star_icon.png';
import star_dull_icon from './Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2 p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex snap-x overflow-x-auto lg:flex-col">
            <img className="w-36 h-36 object-cover m-2 snap-center" src={product.image} alt="Product" />
            <img className="w-36 h-36 object-cover m-2 snap-center" src={product.image} alt="Product" />
            <img className="w-36 h-36 object-cover m-2 snap-center" src={product.image} alt="Product" />
            <img className="w-36 h-36 object-cover m-2 snap-center" src={product.image} alt="Product" />
          </div>
          <div className="flex-1 mt-4 lg:mt-0 lg:ml-4">
            <img className="w-full h-auto object-cover" src={product.image} alt="Main Product" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
        <div className="flex items-center mb-4">
          <img className="w-6 h-6" src={star_icon} alt="Star" />
          <img className="w-6 h-6" src={star_icon} alt="Star" />
          <img className="w-6 h-6" src={star_icon} alt="Star" />
          <img className="w-6 h-6" src={star_icon} alt="Star" />
          <img className="w-6 h-6" src={star_dull_icon} alt="Star" />
          <p className="ml-2">(122)</p>
        </div>
        <div className="flex items-center mt-12">
          <div className="text-gray-500 line-through mr-2">${product.old_price}</div>
          <div className="text-red-500 text-xl">${product.new_price}</div>
        </div>
        <div className="mb-8 mt-8">
          <p className="text-sm">
            Stay warm and stylish with our premium men’s jacket. Crafted from high-quality materials, it offers exceptional comfort and durability. Perfect for any occasion, this jacket combines functionality with a modern design.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl text-gray-500 font-semibold mb-2">Select Size</h2>
          <div className="flex space-x-2 mt-2">
            <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">S</div>
            <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">M</div>
            <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">L</div>
            <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">XL</div>
            <div className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-gray-200">XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }} className="bg-red-500 text-white px-6 py-3 hover:bg-red-600 mt-4">ADD TO CART</button>
        <p className="mt-12"><span className="font-semibold">Category:</span> Men, Jacket</p>
        <p><span className="font-semibold">Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
