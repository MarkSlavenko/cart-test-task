import { combineReducers } from 'redux';

import {
  SET_CART_ITEMS,
  SET_TOTAL_PRICE,
} from '../constants';

const productsExample = [
  {
    id: "sfwesr32r3efer",
    img: "https://images.ua.prom.st/1764714745_w640_h640_belye-krossovki-zhenskie.jpg",
    title: "Naming test olyalya 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" + 
    "et dolore magna aliqua.",
    count: 1,
    price: 25.99,
  },
  {
    id: "1231231232r3efer",
    img: "https://i8.rozetka.ua/goods/16407196/174533913_images_16407196037.jpg",
    title: "Naming test olyalya 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" + 
    "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
    "commodo consequat.",
    count: 3,
    price: 40.00,
  },
  {
    id: "sfwesr3453452677gfer",
    img: "https://images.ua.prom.st/1531243327_zhenskie-krossovki-queencity.jpg",
    title: "Naming test olyalya 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" + 
    "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    count: 2,
    price: 20.00,
  },
];

export const initialState = {
  cartItems: productsExample,
  totalPrice: 0, 
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