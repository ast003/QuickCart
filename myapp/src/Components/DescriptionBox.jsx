const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className='navigator flex px-12 mt-12'>
                <div className="h-12 w-36 border-2 border-gray-200 content-center px-8 font-semibold">Description</div>
                <div className="h-12 w-48 border-2 border-gray-200 content-center px-8 text-gray-500">Reviews (122)</div>
            </div>
            <div className='description-box px-12 '>
                <p className="px-16 py-8 content-center border-2 border-gray-20">
                An e-commerce website is a digital platform that allows businesses and individuals to conduct transactions over the internet.
                These websites enable the buying and selling of goods and services, ranging from physical products like clothing and electronics to digital items like software and e-books.
                <br/>A well-designed e-commerce website typically includes features such as product catalogs, shopping carts, secure payment gateways, user accounts, and customer service options. 
                Additionally, advanced e-commerce sites often incorporate functionalities like personalized recommendations, user reviews, and order tracking.
                </p>
            </div>
        </div>
    )
}
export default DescriptionBox
