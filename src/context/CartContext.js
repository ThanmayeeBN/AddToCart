import { createContext, useCallback, useContext, useState } from "react";


const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState({});
    const addToCart = useCallback((product) => {
        const newCart = { ...cart };
        if (cart[product.id]) {
            const newProduct = { ...newCart[product.id] };
            newProduct.quantity += 1;
            newCart[product.id] = newProduct;
        } else {
            const newProduct = {
                ...product,
                quantity: 1,
            }
          newCart[newProduct.id] = newProduct
        }
        setCart(newCart)
    }, [setCart, cart]);

    const removeItem = useCallback((product) => {
        const newCart = {...cart};

        if(!newCart[product.id]) return;

        if(newCart[product.id].quantity === 1){
              delete newCart[product.id];
        }else{
            const newProduct = {...newCart[product.id]};
            newProduct.quantity -= 1;
            newCart[product.id] = newProduct;
        }
        setCart(newCart);
    },[cart,setCart]);

    return (
        <CartContext.Provider value={{cart,addToCart,removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

const useCartContext = () => useContext(CartContext);
export { useCartContext };

export default CartProvider;