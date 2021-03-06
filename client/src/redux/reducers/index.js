import { combineReducers } from 'redux';

import {
  SET_CART_ITEMS,
  SET_TOTAL_PRICE,
  SET_CART_IS_EMPTY,
} from '../constants';

export const initialState = {
  cartItems: [{ id: 'skeleton 1' }, { id: 'skeleton 2' }, { id: 'skeleton 3' }],
  cartIsEmpty: false,
  totalPrice: 0.00,
};

export const Cart = (store = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...store,
        cartItems: action.items,
      };
    case SET_TOTAL_PRICE:
      return {
        ...store,
        totalPrice: action.price,
      };
    case SET_CART_IS_EMPTY:
      return {
        ...store,
        cartIsEmpty: action.status,
      };
    default:
      return store;
  }
};

export const rootReducer = combineReducers({
  cart: Cart,
});
