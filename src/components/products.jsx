import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartslice';
import '../styles.css';


const plants = [
  { id: 1, name: 'Monstera', price: 20, category: 'Indoor', img: '/public/download (1).jpg' },
  { id: 2, name: 'Fiddle Leaf', price: 25, category: 'Indoor', img: '/public/download (2).jpg' },
  { id: 3, name: 'Aloe Vera', price: 15, category: 'Succulent', img: '/public/download.jpg' },
  { id: 4, name: 'Snake Plant', price: 18, category: 'Succulent', img: '/public/images (1).jpg' },
  { id: 5, name: 'Peace Lily', price: 22, category: 'Flowering', img: '/public/images.jpg' },
  { id: 6, name: 'Spider Plant', price: 16, category: 'Indoor', img: '/public/istockphoto-956366756-612x612.jpg' },
];

export default function Products() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const [disabled, setDisabled] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setDisabled(prev => [...prev, plant.id]);
  };

  return (
    <div className="products-container">
  <h2>Shop Plants</h2>
  <div className="products-grid">
    {plants.map(plant => (
      <div key={plant.id} className="product-card">
        <img src={plant.img} alt={plant.name} />
        <h3>{plant.name}</h3>
        <p>${plant.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => handleAdd(plant)}
          disabled={disabled.includes(plant.id)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</div>

  );
}
