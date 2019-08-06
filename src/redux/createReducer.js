import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import BoardingReducer from '../screens/boarding/reducer';
import LoginReducer from '../screens/login/reducer';

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage,
  blacklist: ['util']
}

const combinedReducer = persistCombineReducers(persistConfig, {
  boarding: BoardingReducer,
  login: LoginReducer
})

export default function rootReducer(state, action) {
  return combinedReducer(state, action);
}