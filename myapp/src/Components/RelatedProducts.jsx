import data_product from './Assets/data'
import Item from './Item'
const RelatedProducts = () => {
  return (
    <div className='related-products mt-24'>
        <h1 className='text-4xl font-semibold flex justify-center mb-4'>Related Products</h1>
        <hr className='border-t-4 border-black w-1/6 mx-auto mb-12'/>
        <div className='related-products-items flex gap-x-16 justify-center'>
        {data_product.map((item, i) => {
          return <Item key={i} 
          id={item.id} 
          name={item.name} 
          image={item.image} 
          new_price={item.new_price} 
          old_price={item.old_price} />
        }
        )}
        </div>
    </div>
  )
}

export default RelatedProducts
