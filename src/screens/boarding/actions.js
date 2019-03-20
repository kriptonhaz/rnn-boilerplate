import * as actionType from './constants'

export const boardingPage = data => ({
  type: actionType.BOARDING_PAGE,
  payload: data,
})

export const boardingStatus = data => ({
  type: actionType.BOARDING_STATUS,
  payload: data,
})