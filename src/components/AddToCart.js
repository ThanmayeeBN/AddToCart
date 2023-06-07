import React, { useCallback } from "react";
import { addToCart,removeFromCart } from "../store/reducers/cart";
import {useSelector,useDispatch} from 'react-redux';


function AddToCart({product}) {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleAddToCart = useCallback(() =>{
        dispatch(addToCart(product));
    },[product,dispatch]);
    
    const handleRemoveFromCart = useCallback(() =>{
        dispatch(removeFromCart(product));
    },[product,dispatch]);

    if (cart[product.id]){
        return (
            <div className="add-to-cart">
                <div onClick={handleRemoveFromCart} className="add">
                   -
                </div>
                <div>
                    {cart[product.id].quantity}
                </div>
                <div onClick={handleAddToCart} className="add">
                   +
                </div>
            </div>
        )
    }else{
       return <div onClick={handleAddToCart} className="add"> AddToCart</div>
    }
}

export default AddToCart;