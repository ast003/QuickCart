import { useEffect ,useState} from 'react';
import Item from './Item';


const NewCollections = () => {
  const [new_collections,setNew_collections]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newCollection')
   .then((response)=>response.json())
   .then((data)=>setNew_collections(data));
},[])
  return (
    <div className='new-collections'>
      <h1 className='text-4xl font-semibold flex justify-center mb-4'>NEW COLLECTIONS</h1>
      <hr className='border-t-4 border-black w-1/6 mx-auto mb-12' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center px-40'>
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



