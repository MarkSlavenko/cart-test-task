import {
  SET_CART_ITEMS,
  SET_TOTAL_PRICE,
  SET_CART_IS_EMPTY,
} from '../constants';

import { getCartItems } from '../api';

export const setCartItems = (items) => ({
  type: SET_CART_ITEMS,
  items,
});

export const setTotalPrice = (price) => ({
  type: SET_TOTAL_PRICE,
  price,
});

export const setCartIsEmpty = (status) => ({
  type: SET_CART_IS_EMPTY,
  status,
});

export const loadCartItems = () => {
  return async (dispatch) => {
    const res = await getCartItems();
    if (res.status === 200) {
      const items = res.data.data;
      if (items.length === 0) {
        dispatch(setCartIsEmpty(true));
      } else {
        dispatch(setCartItems(items));
        dispatch(countTotalPrice());
      }
    } else {
      dispatch(setCartIsEmpty(true));
    }
  };
};

const countTotalPrice = () => {
  let totalPrice = 0;
  return (dispatch, getState) => {
    totalPrice = getState().cart.cartItems.reduce((total, item) => {
      return total + (item.count * item.price);
    }, 0);
    dispatch(setTotalPrice(totalPrice));
  };
};

// const changeCountForItem = (id, )
