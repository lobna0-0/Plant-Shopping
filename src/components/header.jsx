import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex justify-between p-4 bg-green-100 shadow">
      <Link to="/">🌿 HousePlants</Link>
      <nav className="space-x-4">
        <Link to="/products">Shop</Link>
        <Link to="/cart">🛒 {total}</Link>
      </nav>
    </header>
  );
}