import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsList from '../../components/ProductsList';
import './cart.scss';

import {
  loadCartItems
} from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.loadCartItems();
  }

  render() {
    const { cartItems, totalPrice } = this.props;

    return (
      <div className="cart-page container">
        <ProductsList
          products={cartItems}
        />
        <div className="buy-div text-right">
          <p>
            {totalPrice.toFixed(2)} €
          </p>
          <Link to="/shipping">
            <button>Buy</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  cartItems: store.cart.cartItems,
  totalPrice: store.cart.totalPrice,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    loadCartItems: () => {
      dispatch(loadCartItems())
    },
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
