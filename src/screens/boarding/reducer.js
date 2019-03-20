import * as actionType from './constants.js'

const initialState = {
  boardingPage: 0,
  boardingStatus: 0
}

const boardingPage = (state, payload) => ({
  ...state,
  boardingPage: payload,
})

const boardingStatus = (state, payload) => {
  return {
    ...state,
    boardingStatus: payload
  }
}

const boardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BOARDING_PAGE:
      return boardingPage(state, action.payload)
    case actionType.BOARDING_STATUS:
      return boardingStatus(state, action.payload)
    default:
      return state
  }
}

export default boardingReducer