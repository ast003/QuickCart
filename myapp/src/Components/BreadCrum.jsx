import arrow_icon from './Assets/breadcrum_arrow.png'

const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div>
        HOME<img src={arrow_icon}/>SHOP<img src={arrow_icon}/>{product.category}<img src={arrow_icon}/>{product.name}
    </div>
  )
}

export default BreadCrum
