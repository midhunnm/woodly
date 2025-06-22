import React, { useState } from 'react'
import './Cart.css'

const Cart = () => {
  const [selectedAddress, setSelectedAddress] = useState('saved');
  const [selectedPayment, setSelectedPayment] = useState('Debit Card');
  const [quantities, setQuantities] = useState({
    item1: 1,
    item2: 1,
    item3: 1,
  });

  const prices = {
    item1: 1800,
    item2: 2600,
    item3: 3040,
  };

  const updateQuantity = (item, change) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: Math.max(1, prev[item] + change),
    }));
  };

  const subtotal = Object.keys(prices).reduce(
    (acc, item) => acc + prices[item] * quantities[item],
    0
  );
  const delivery = 200;
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + delivery + gst;

  return (
    <div className="container">
      <div className="header">
        <div className="logo">Woodly</div>
        <div className="subtitle">Handcrafted with Love & Nature</div>
      </div>

      <div className="checkout-container">
      
        <div className="payment-form">
          <h2 className="section-title"> Delivery Address</h2>

          <div
            className={`saved-address ${selectedAddress === 'saved' ? 'selected' : ''}`}
            onClick={() => setSelectedAddress('saved')}
          >
            <div className="address-header"> Home Address</div>
            <div className="address-details">
              123 Wooden Lane<br />
              Craftville, 12345<br />
              Kerala, India
            </div>
          </div>

          <div
            className={`saved-address ${selectedAddress === 'new' ? 'selected' : ''}`}
            onClick={() => setSelectedAddress('new')}
          >
            <div className="address-header">"+" Add New Address</div>
          </div>

          {selectedAddress === 'new' && (
            <>
              <div className="form-group">
                <label>Street Address</label>
                <input type="text" placeholder=" Woodhouse" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" placeholder="Craftville" />
                </div>
                <div className="form-group">
                  <label>PIN Code</label>
                  <input type="text" placeholder="12345" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                    <option>Kerala</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Maharashtra</option>
                    <option>Gujarat</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" value="India" readOnly />
                </div>
              </div>
            </>
          )}

          <h2 className="section-title"> Payment Method</h2>
          <div className="payment-methods">
            {['Debit Card', 'Credit Card', 'UPI', 'Cash on Delivery'].map((method) => (
              <div
                key={method}
                className={`payment-method ${selectedPayment === method ? 'selected' : ''}`}
                onClick={() => setSelectedPayment(method)}
              >
                <div className="payment-icon">
                  {method === 'UPI' ? '' : method === 'Cash on Delivery' ? '' : ''}
                </div>
                <div>{method}</div>
              </div>
            ))}
          </div>

          {['Debit Card', 'Credit Card'].includes(selectedPayment) && (
            <>
              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" placeholder="Name on Card" />
              </div>
            </>
          )}

          {selectedPayment === 'UPI' && (
            <div className="form-group">
              <label>UPI ID</label>
              <input type="text" placeholder="yourname@paytm" />
            </div>
          )}

          {selectedPayment === 'Cash on Delivery' && (
            <div className="cod-box">
              <p> Cash on Delivery</p>
              <p>Pay when you receive your wooden crafts</p>
            </div>
          )}

          <button className="pay-button">
         Complete Order - ₹{total.toLocaleString()}
          </button>
        </div>

        {/* RIGHT SIDE – CART */}
        <div className="order-summary">
          <h3 className="summary-title">Your Cart</h3>

          {['item1', 'item2', 'item3'].map((item, i) => (
            <div className="order-item" key={item}>
              <img
                src={['/images=bowl.jpeg/bowl.jpg', '/images=board.jpeg/board.jpg', '/images=box.webp/box.jpg'][i]}
                alt="Product"
                className="item-image"
              />
              <div className="item-details">
                <div className="item-name">
                  {['Handcrafted Oak Bowl', 'Wooden Cutting Board', 'Cedar Jewelry Box'][i]}
                </div>
                <div className="item-desc">
                  {['Natural finish, food-safe', 'Bamboo, eco-friendly', 'Hand-carved details'][i]}
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item, -1)}>-</button>
                  <span>{quantities[item]}</span>
                  <button onClick={() => updateQuantity(item, 1)}>+</button>
                </div>
              </div>
              <div className="item-price">₹{prices[item].toLocaleString()}</div>
            </div>
          ))}

          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Delivery:</span>
            <span>₹{delivery}</span>
          </div>
          <div className="summary-row">
            <span>GST (18%):</span>
            <span>₹{gst}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart
