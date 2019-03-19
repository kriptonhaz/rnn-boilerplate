import * as actionType from './constants'

export const loginRequest = data => ({
  type: actionType.LOGIN_REQUEST,
  payload: data,
})

export const loginStatus = data => ({
  type: actionType.LOGIN_STATUS,
  payload: data,
})

export const loginSuccess = data => ({
  type: actionType.LOGIN_SUCCESS,
  payload: data,
})

export const loginError = error => ({
  type: actionType.LOGIN_ERROR,
  payload: error,
})