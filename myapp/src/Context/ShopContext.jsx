import { createContext, useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth } from '../Pages/firebase';  
import { db } from '../Pages/firebase'; 

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState(null);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/allproduct');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const products = await response.json();
                setAllProducts(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userId = currentUser.uid;
                const cartDocRef = doc(db, 'carts', userId);
                const cartSnapshot = await getDoc(cartDocRef);
                if (cartSnapshot.exists()) {
                    setCartItems(cartSnapshot.data().cartItems);
                } else {
                    const defaultCart = getDefaultCart(allProducts);
                    setCartItems(defaultCart);
                    await setDoc(cartDocRef, { cartItems: defaultCart });
                }
            } else {
                setCartItems(null);
            }
        });

        return () => unsubscribe();
    }, [allProducts]);

    useEffect(() => {
        if (user && cartItems !== null) {
            saveCartData(user.uid, cartItems);
        }
    }, [cartItems, user]);

    const getDefaultCart = (products) => {
        let cart = {};
        for (let index = 0; index < products.length; index++) {
            cart[products[index].id.toString()] = 0;
        }
        return cart;
    };

    const saveCartData = async (userId, cartItems) => {
        const cartDocRef = doc(db, 'carts', userId);
        await setDoc(cartDocRef, { cartItems });
    };

    const addToCart = (itemId) => {
        if (cartItems !== null) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const removeFromCart = (itemId) => {
        if (cartItems !== null && cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    };

    const getTotalAmount = () => {
        if (cartItems === null) {
            return 0;
        }
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id.toString() === item);
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalItems = () => {
        if (cartItems === null) {
            return 0;
        }
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    const contextValue = {
        getTotalItems,
        getTotalAmount,
        allProducts,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
