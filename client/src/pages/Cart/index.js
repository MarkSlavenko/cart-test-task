import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductsList from '../../components/ProductsList';
import './cart.scss';

import {
  loadCartItems,
  deleteItemFromCart,
  changeItemCount,
} from '../../actions';

class Cart extends Component {
  componentDidMount() {
    this.props.loadCartItems();
  }

  render() {
    const {
      cartItems,
      totalPrice,
      deleteItem,
      changeCountFunc,
    } = this.props;

    if (cartItems.length === 0) {
      return (
        <div className="cart-page container">
          <h2>Cart is empty!</h2>
          <a href="/cart"><button>Hard reset</button></a>
        </div>
      );
    } else {
      return (
        <div className="cart-page container">
          <ProductsList
            products={cartItems}
            delItemFunc={deleteItem}
            changeCountFunc={changeCountFunc}
          />
          <div className="buy-div text-right">
            <p>
              {(totalPrice || totalPrice === 0) ? `${totalPrice.toFixed(2)} €` : <Skeleton />}
            </p>
            <Link to="/shipping">
              <button>Buy</button>
            </Link>
          </div>
        </div>
      );
    }
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
    dispatch(deleteItemFromCart(id));
  },
  changeCountFunc: (id, count) => {
    dispatch(changeItemCount(id, count));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
