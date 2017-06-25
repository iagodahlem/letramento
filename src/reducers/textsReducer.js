import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.TEXTS_FETCH_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const active = (state = {}, action) => {
  switch (action.type) {
    case types.TEXTS_SHOW_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.TEXTS_FETCH_REQUEST:
    case types.TEXTS_SHOW_REQUEST:
      return true
    case types.TEXTS_FETCH_SUCCESS:
    case types.TEXTS_FETCH_FAILURE:
    case types.TEXTS_SHOW_SUCCESS:
    case types.TEXTS_SHOW_FAILURE:
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.TEXTS_FETCH_FAILURE:
    case types.TEXTS_SHOW_FAILURE:
      return action.message
    case types.TEXTS_FETCH_REQUEST:
    case types.TEXTS_FETCH_SUCCESS:
    case types.TEXTS_SHOW_REQUEST:
    case types.TEXTS_SHOW_SUCCESS:
      return null
    default:
      return state
  }
}

const textsReducer = combineReducers({
  all,
  active,
  isFetching,
  errorMessage,
})

export default textsReducer

export const getTexts = (state) => state.all
export const getText = (state) => state.active
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
