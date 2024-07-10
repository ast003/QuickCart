import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Components/HomePage'
import AddProduct from '../Components/AddProduct';
import ListProduct from '../Components/ListProduct';

const Admin = () => {
  return (
    <div className="flex">
      <HomePage/>
      <div className="w-full lg:mr-72 md:mr-24">
        <Routes>
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/listproduct' element={<ListProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admin;

