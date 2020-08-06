import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './shippingForm.scss';

const ShippingForm = ({ totalPrice }) => {

  const [formName, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [formValid, setFormValid] = useState(false);
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const validPhoneRegex = RegExp(/^\+?3?8?(0[5-9][0-9]\d{7})$/i);

  useEffect(() => {
    formValidationCheck();
  }, [formName, address, phone, email]);

  const formValidationCheck = () => {
    if (
      formName.length > 3
      && address.length > 3
      && (phone.length === 0 || validPhoneRegex.test(phone))
      && (email.length === 0 || validEmailRegex.test(email))
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const formOnSubmit = (event) => {
    event.preventDefault();
    // send form data to server
    console.log('Data has been sent!');
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="shipping-form">
      <form onSubmit={formOnSubmit} noValidate>
        <ul>
          <li>
            <label htmlFor="name">Name*</label>
            <input
              name="name"
              type="text"
              id="name"
              value={formName}
              placeholder="Ivan Ivanov"
              onChange={handleChange}
              noValidate
            />
          </li>
          <li>
            <label htmlFor="address">Address*</label>
            <input
              name="address"
              type="text"
              id="address"
              value={address}
              placeholder="123 Soborna St."
              onChange={handleChange}
              noValidate
            />
          </li>
          <li>
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="text"
              id="phone"
              value={phone}
              placeholder="+380123456789"
              onChange={handleChange}
              noValidate
            />
          </li>
          <li>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              id="email"
              value={email}
              placeholder="myemail@example.com"
              onChange={handleChange}
              noValidate
            />
          </li>
          <li>
            <label htmlFor="shipping">Shipping options</label>
            <select id="shipping">
              {totalPrice >= 300 ?
                <option>Free express shipping</option>
              :
                <>
                  <option>Free shipping</option>
                  <option>Express shipping</option>
                  <option>Courier shipping</option>
                </>}
            </select>
          </li>
          <li>
            <button type="submit" disabled={!formValid}>Pay</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

ShippingForm.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default ShippingForm;
