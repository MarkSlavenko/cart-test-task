import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsList from '../../components/ProductsList';
import './cart.scss';

import {
  loadCartItems,
  deleteItemFromCart
} from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.loadCartItems();
  }

  render() {
    const { cartItems, totalPrice, deleteItem } = this.props;

    return (
      <div className="cart-page container">
        <ProductsList
          products={cartItems}
          delItemFunc={deleteItem}
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

const mapDispatchToProps = (dispatch) => ({
  loadCartItems: () => {
    dispatch(loadCartItems());
  },
  deleteItem: (id) => {
    dispatch(deleteItemFromCart(id))
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
