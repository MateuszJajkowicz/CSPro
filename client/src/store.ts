import { configureStore } from '@reduxjs/toolkit';

const reducers = {};

const cartItemsFromStorage = localStorage.getItem('cartItems');
const parsedCartItems = cartItemsFromStorage
  ? JSON.parse(cartItemsFromStorage)
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo');
const parsedUserInfo = userInfoFromStorage
  ? JSON.parse(userInfoFromStorage)
  : null;

const initialState = {
  cart: {
    cartItems: parsedCartItems,
  },
  userLogin: { userInfo: parsedUserInfo },
};

const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
  devTools: process.env.REACT_APP_ENV !== 'production',
});

export default store;
