import React from 'react';
import './styles.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Landing from './components/landing';
import Products from './components/products';
import Cart from './components/cart';
import Checkout from './components/checkout';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}