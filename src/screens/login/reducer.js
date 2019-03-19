import * as actionType from './constants.js'

const initialState = {
  isLoading: false,
  isError: false,
  isLogin: 0,
  errorMsg: null,
  posts: [],
}

const loginRequest = state => ({
  ...state,
  isLoading: true,
})

const loginStatus = (state, payload) => {
  return {
    ...state,
    isLogin: payload
  }
}

const loginSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  posts: payload,
})

const loginError = (state, payload) => ({
  ...state,
  isLoading: false,
  isError: true,
  errorMsg: payload,
})

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_REQUEST:
      return loginRequest(state, action.payload)
    case actionType.LOGIN_STATUS:
      return loginStatus(state, action.payload)
    case actionType.LOGIN_SUCCESS:
      return loginSuccess(state, action.payload)
    case actionType.LOGIN_ERROR:
      return loginError(state, action.payload)
    default:
      return state
  }
}

export default loginReducer