import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from './features/counter/cartSlice';
import './App.css';

export default function App() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (itemId, event) => {
    const newQuantity = parseInt(event.target.value, 10);
    const item = items.find(item => item.id === itemId);
    if (item && !isNaN(newQuantity)) {
      const diff = newQuantity - item.quantity;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          dispatch(increaseQuantity({ itemId }));
        }
      } else {
        for (let i = 0; i < Math.abs(diff); i++) {
          dispatch(decreaseQuantity({ itemId }));
        }
      }
    }
  };

  const handleRemove = (itemId) => {
    dispatch(removeItem({ itemId }));
  };

  const calculateItemSubtotal = (price, quantity) => price * quantity;

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = "FREE";
  const total = subtotal;

  return (
    <div className="container">
      <div className="items-list">
        {items.map((item, index) => (
          <div className={`item-card ${index % 2 === 0 ? 'even' : 'odd'}`} key={item.id}>
            <div className="item-info">
              <img src={item.thumbnail} alt={item.title} className="item-image" />
              <div className="item-details">
                <h2 className="item-title">{item.title}</h2>
                <p className="item-description">{item.description}</p>
                <span className="remove-button" onClick={() => handleRemove(item.id)}>
                  Remove
                </span>
              </div>
            </div>
            <div className="pricing-info">
              
                <div className="quantity-wrapper">
                  <select
                    name={`quantity-${item.id}`}
                    id={`quantity-${item.id}`}
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    className="quantity-select"
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="item-price text-muted">Price: ${item.price}</p>
              <p className="item-subtotal">Subtotal: ${calculateItemSubtotal(item.price, item.quantity)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span className="summary-label">SHIPPING :</span>
          <span className="summary-value">{shipping}</span>
        </div>
        <div className="summary-row">
          <span className="summary-label">TOTAL :</span>
          <span className="summary-value">${total}</span>
        </div>
      </div>
    </div>
  );
}
