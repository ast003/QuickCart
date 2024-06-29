// import React from 'react';
// import Item from './Item';
// import new_collections from './Assets/new_collections';

// const NewCollections = () => {
//   return (
//     <div className='new-collections'>
//       <h1 className='text-4xl font-semibold flex justify-center mb-4'>NEW COLLECTIONS</h1>
//       <hr className='border-t-4 border-black w-1/6 mx-auto mb-12'/>
//       <div className='grid grid-cols-4 justify-items-center gap-0'>
//         {new_collections.map((item, i) => {
//           return <Item key={i} 
//                        id={item.id} 
//                        name={item.name} 
//                        image={item.image} 
//                        new_price={item.new_price} 
//                        old_price={item.old_price} />
//         })}
//       </div>  
//     </div>
//   )
// }
// export default NewCollections;import React from 'react';
import React from 'react';
import Item from './Item';
import new_collections from './Assets/new_collections';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1 className='text-4xl font-semibold flex justify-center mb-4'>NEW COLLECTIONS</h1>
      <hr className='border-t-4 border-black w-1/6 mx-auto mb-12' />
      <div className='grid grid-cols-4 gap-2 justify-items-center px-40'>
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>  
    </div>
  );
};

export default NewCollections;



