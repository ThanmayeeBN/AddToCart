import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useMemo } from "react";
import CartProduct from "./CartProduct";

export default function CartPage() {
  const cart = useSelector(state => state.cart);

  const cartItem = useMemo(() => {
    let totalItems = 0;
    if (Object.keys(cart).length > 0) {
      Object.keys(cart).forEach((productId) => {
        totalItems += cart[productId].quantity;
      });
    }
    return totalItems;
  }, [cart]);

  const cartTotal = useMemo(() => {
    let total = 0;
    if (Object.keys(cart).length > 0) {
      Object.keys(cart).forEach((productId) => {
        total += cart[productId].price * cart[productId].quantity; // Fix calculation
      });
    }
    return total;
  }, [cart]);

  if (cartItem === 0) {
    return (
      <div className="message">
        Hey, your cart is empty. Please add some products.
        <Link className="add mes" to="/products/electronics">Go to Products</Link>
      </div>
    );
  } else {
    return (
      <div className="cart-item-container">
        {Object.keys(cart).map((productId) => (
          <CartProduct key={productId} product={cart[productId]} />
        ))}
        <div className="cart-total">
          Total for this cart would be ${cartTotal}
        </div>
      </div>
    );
  }
}
