
/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'redux/reducers/root.reducer';

import promiseMiddleware from './promiseMiddleware';

const enhancers = [];
const middlewares = [
  thunkMiddleware,
  promiseMiddleware,
];

if (process.env.REACT_APP_ENV !== 'production') {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
}

const composedEnhancer = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const initStore = () => createStore(rootReducer, {}, composedEnhancer);

const store = initStore();

export default store;
