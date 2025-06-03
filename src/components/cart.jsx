import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, remove } from '../slices/cartslice';
import { Link } from 'react-router-dom';
import '../styles.css'; // Assuming you have a styles.css file for styling

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart-container">
  <h2 className="cart-title">Your Cart</h2>
  
  <div className="cart-summary">
    <p>Total Items: <span>{totalItems}</span></p>
    <p>Total Price: <span>${totalPrice.toFixed(2)}</span></p>
  </div>

  {cart.length === 0 ? (
    <p className="empty-msg">Your cart is empty.</p>
  ) : (
    cart.map(item => (
      <div key={item.id} className="cart-item">
        <img src={item.img} alt={item.name} className="cart-item-img" />
        
        <div className="cart-item-info">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>

        <div className="cart-item-quantity">
          <button onClick={() => dispatch(decrease(item.id))} className="btn-qty">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increase(item.id))} className="btn-qty">+</button>
        </div>

        <button onClick={() => dispatch(remove(item.id))} className="btn-remove">🗑️</button>
      </div>
    ))
  )}

  
  <div className="cart-actions">
    <Link to="/checkout" className="checkout-btn">Checkout</Link>
    <Link to="/products" className="continue-shopping">Continue Shopping</Link>
  </div>
</div>

  );
}
