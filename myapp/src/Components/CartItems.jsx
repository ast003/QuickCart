import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from './Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalAmount, allProducts, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className="container mx-auto p-4">
            <div className="main-format grid grid-cols-6 gap-4 text-center font-semibold border-b pb-4">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="my-4" />
            {allProducts.map((product) => {
                const cartQuantity = cartItems[product.id.toString()];
                if (cartQuantity > 0) {
                    return (
                        <div key={product.id} className="item-format grid grid-cols-6 gap-4 text-center items-center border-b py-2">
                            <img src={product.image} alt={product.name} className="h-16 w-16 object-cover mx-auto" />
                            <p className="text-sm">{product.name}</p>
                            <p>${product.new_price}</p>
                            <button className="bg-gray-200 h-12 w-12 mx-auto rounded">{cartQuantity}</button>
                            <p>${(product.new_price * cartQuantity).toFixed(2)}</p>
                            <img
                                src={remove_icon}
                                alt="Remove"
                                onClick={() => removeFromCart(product.id.toString())}
                                className="cursor-pointer h-4 w-4 mx-auto"
                            />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cart-items flex flex-col md:flex-row justify-between mt-8">
                <div className="cart-items-total w-full md:w-2/3">
                    <h1 className="text-2xl font-semibold mt-16 mx-16 mb-12">Cart Totals</h1>
                    <div>
                        <div className="total-item flex justify-between mb-4 mx-16">
                            <p>SubTotal</p>
                            <p>${getTotalAmount()}</p>
                        </div>
                        <hr className="w-11/12 mx-16 mb-2" />
                        <div className="total-item flex justify-between mb-4 mx-16">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr className="w-11/12 mx-16 mb-2" />
                        <div className="total-item flex justify-between mb-4 mx-16 font-semibold">
                            <h3>Total</h3>
                            <h3>${getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 mt-8 mx-16">
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="promo-code w-full md:w-1/3 p-4 mt-24">
                    <p>If you have a promo code, enter it here:</p>
                    <div className="flex mt-4">
                        <input
                            type="text"
                            placeholder="Promo code"
                            className="border p-2 flex-grow bg-gray-200"
                        />
                        <button className="px-4 py-2 bg-gray-900 text-white hover:bg-gray-400">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
