import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Address:
          <input type="text" required />
        </label>
        <label>
          Phone:
          <input type="tel" required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
