import React from 'react';
import './shippingForm.scss';

const ShippingForm = () => {
  const formOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="shipping-form">
      <form onSubmit={formOnSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" required />
          </li>
          <li>
            <label htmlFor="address">Address*</label>
            <input type="text" id="address" required />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </li>
          <li>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </li>
          <li>
            <label htmlFor="shipping">Shipping options</label>
            <select id="shipping">
              <option>Free shipping</option>
              <option>Express shipping</option>
              <option>Courier shipping</option>
            </select>
          </li>
          <li>
            <button type="submit">Pay</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ShippingForm;
