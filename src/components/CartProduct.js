import React from "react";
import AddToCart from "./AddToCart";

export default function CartProduct({ product }) {
    console.log({product});
    return (
        <div className="cart-product">
            <div className="cart-product--left">
                <img className="cart-product--image"
                    src={product.image}
                    alt={product.title} />
                <div className="cart-product--title">{product.title}</div>
                <div className="cart-product--title">${product.price}</div>
            </div>
            <div className="cart-product--right">
               <AddToCart product={product}/>
            </div>
        </div>
    )
}