import { createContext, useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth } from '../Pages/firebase';  
import all_product from '../Components/Assets/all_product';
import { db } from '../Pages/firebase'; 

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id.toString()] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [cartItems, setCartItems] = useState(null);

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
                    setCartItems(getDefaultCart());
                    await setDoc(cartDocRef, { cartItems: getDefaultCart() });
                }
            } else {
                setCartItems(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user && cartItems !== null) {
            saveCartData(user.uid, cartItems);
        }
    }, [cartItems, user]);

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
                let itemInfo = all_product.find((product) => product.id.toString() === item);
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
        all_product,
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
