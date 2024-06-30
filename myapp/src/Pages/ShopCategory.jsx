import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div>
      <img className='px-36 mt-6 mb-6' src={props.banner} alt="Banner" />
      
      <div className='shopCategory-indexSort flex justify-between items-center px-36'>
        <p>
          <span className='font-semibold'>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopCategory-sort flex items-center'>
          <button className='flex items-center text-gray-950 px-4 py-2 rounded-full border-solid border-2 border-gray-900'>
            Sort by 
            <img src={dropdown_icon} alt="Dropdown Icon" className='ml-2' />
          </button>
        </div>
      </div>

      <div className='shopCategory-products grid grid-cols-4 gap-4 justify-items-center px-36 mt-12'>
        {all_product.map((item, i) => (
          props.category === item.category ? (
            <Item key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price} />
          ) : null
        ))}
      </div>

      <div className='flex justify-center mb-12'>
        <button className='loadmore bg-gray-200  text-gray-900 px-6 py-3 rounded-full mt-24'>
          Explore More
        </button>
      </div>
    </div>
  );
}

export default ShopCategory;
