import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShippingForm from './components/ShippingForm';

class Shipping extends Component {
  render() {
    const { totalPrice } = this.props;

    return (
      <div className="shipping-page container">
        <ShippingForm
          totalPrice={totalPrice}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  totalPrice: store.cart.totalPrice,
});

export default connect(
  mapStateToProps,
)(Shipping);
