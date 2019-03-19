import { all } from 'redux-saga/effects';
import watchLogin from '../screens/login/saga';

export default function* rootSaga() {
  yield all([watchLogin()])
};