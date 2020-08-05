import { combineReducers } from 'redux';

import {
  SET_CART_ITEMS,
  SET_TOTAL_PRICE,
} from '../constants';

export const initialState = {
  cartItems = [],
  totalPrice = 0, 
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
        totalPrice: action.totalPrice,
      };
    default:
      return store;
  }
};

export const rootReducer = combineReducers({
  cart: Cart,
});