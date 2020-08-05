import React, { Component } from 'react';
import ShippingForm from '../../components/ShippingForm';

class Shipping extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div className="shipping-page container">
        <ShippingForm />
      </div>
    );
  }
}

export default Shipping;
