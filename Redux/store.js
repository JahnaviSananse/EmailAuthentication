import {combineReducers, createStore} from 'redux';
import LoginReducer from './Login.reducer';
import {applyMiddleware} from 'redux'; //to track redux
import logger from 'redux-logger'; //to track redux
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  dataFetch: LoginReducer,
});
const configureStore = () => {
  const middleware = [];
  middleware.push(logger);
  middleware.push(thunk);
  return createStore(rootReducer, applyMiddleware(...middleware));
};

export default configureStore;
