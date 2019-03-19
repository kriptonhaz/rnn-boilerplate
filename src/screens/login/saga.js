import { put, takeLatest, call, all } from 'redux-saga/effects'

import * as actionType from './constants'
import * as loginAction from './action'
import API from '../../utils/request'

function* login() {
  try {
    const res = yield call(API.get, '/posts')
    yield put(loginAction.loginSuccess(res))
  } catch (error) {
    yield put(loginAction.loginError(error.message))
  }
}

export default function* watchLogin() {
  yield all([
    takeLatest(actionType.LOGIN_REQUEST, login),
  ])
}