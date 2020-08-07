import {
  SET_CART_ITEMS,
  SET_TOTAL_PRICE,
  SET_CART_IS_EMPTY
} from '../constants/index.js';

import { getCartItems, } from '../api';

export const setCartItems = items => {
  return ({
    type: SET_CART_ITEMS,
    items
  })
};

export const setTotalPrice = price => {
  return ({
    type: SET_TOTAL_PRICE,
    price
  })
};

export const setCartIsEmpty = status => {
  return ({
    type: SET_CART_IS_EMPTY,
    status
  })
};

export const loadCartItems = () => {
  return async (dispatch) => {
    const res = await getCartItems();
    if (res.status === 200) {
      const items = res.data.data;
      if (items.length === 0) {
        dispatch(setCartIsEmpty(true));
      }
        else {
          dispatch(setCartItems(items));
        }
    } else {
      dispatch(setCartIsEmpty(true));
    }
  }
}