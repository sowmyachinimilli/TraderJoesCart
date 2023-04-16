import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { productListReducer } from './reducers/productReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
