import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cartReducer';
import categoriesReducer from './categoriesReducer';
import shopReducer from './shopReducer';
import userReducer from './userReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart' ],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
