import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsList from '../../components/ProductsList';

class Cart extends Component { 

  render () {
    const { cartItems, totalPrice} = this.props;

    return (
      <div className="cart-page container">
        <ProductsList 
        products={cartItems}
        totalPrice={totalPrice}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  cartItems: store.cart.cartItems,
  totalPrice: store.cart.totalPrice,
});

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Cart);