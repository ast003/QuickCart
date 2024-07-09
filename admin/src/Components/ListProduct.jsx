import React, { useEffect, useState } from 'react';

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproduct');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.success) {
        setProducts(products.filter(product => product.id !== id));
      } else {
        alert('Failed to remove product');
      }
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-green-500">${product.new_price}</p>
            <p className="text-gray-500 line-through">${product.old_price}</p>
            <button
              onClick={() => removeProduct(product.id)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
