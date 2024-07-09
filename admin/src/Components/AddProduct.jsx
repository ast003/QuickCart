import { useState, useEffect } from 'react';
import upload_area from '../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(upload_area);
    const [productDetails,setProductDetails]=useState({
               name:"",
               image:"",
               category:"women",
               new_price:"",
               old_price:"",
    });

    useEffect(() => {
        if (image) {
            const newImageUrl = URL.createObjectURL(image);
            setImageUrl(newImageUrl);
            return () => URL.revokeObjectURL(newImageUrl);
        } else {
            setImageUrl(upload_area);
        }
    }, [image]);

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product=async()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;
        let formData=new FormData();
        formData.append('product',image);
        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})
        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
            }
        }
    return (
        <div className='add-product-container p-4 ml-0'>
            <div className='mb-4'>
                <p className='mb-2'>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' className='w-full p-2 border border-gray-300 rounded' />
            </div>
            <div className='price-section flex flex-col md:flex-row md:space-x-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <p className='mb-2'>Price</p>
                    <input  value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' className='w-full p-2 border border-gray-300 rounded' />
                </div>
                <div className='flex-1'>
                    <p className='mb-2'>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' className='w-full p-2 border border-gray-300 rounded' />
                </div>
            </div>
            <div>
                <p className='mt-4'>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler}  name='category' className='add-product-selector mt-4 p-2 border border-gray-300 rounded'>
                    <option value='women'>Women</option>
                    <option value='men'>Men</option>
                    <option value='kid'>Kids</option>
                </select>
            </div>
            <div>
                <label htmlFor='file-input' className='block mt-4 cursor-pointer'>
                    <img className='h-36 w-36' src={imageUrl} alt="Upload Area" />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{Add_Product()}} className='mt-4 px-12 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-full'>ADD</button>
        </div>
    );
}

export default AddProduct;
