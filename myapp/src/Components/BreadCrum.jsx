import arrow_icon from './Assets/breadcrum_arrow.png'

const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='flex items-center mx-12 my-6 gap-2'>
        HOME <img src={arrow_icon}/> SHOP<img src={arrow_icon}/> {product.category}<img src={arrow_icon}/> {product.name}
    </div>
  )
}

export default BreadCrum
