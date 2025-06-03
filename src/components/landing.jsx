import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Landing() {
  return (
   <div className="landing">
    <h1>HousePlants</h1>
    <p>We bring nature to your home with the best indoor plants.</p>
    <Link to="/products">Get Started</Link>
    </div>
  );
}