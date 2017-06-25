import * as types from '../constants/actionTypes'
import * as textsService from '../services/textsService'
import { getTextsIsFetching } from '../reducers'

const fetchTexts = () => (dispatch, getState) => {
  const fetchTextsRequest = () => ({
    type: types.TEXTS_FETCH_REQUEST,
  })

  const fetchTextsSuccess = (payload) => ({
    type: types.TEXTS_FETCH_SUCCESS,
    payload,
  })

  const fetchTextsFailure = (error) => ({
    type: types.TEXTS_FETCH_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(fetchTextsRequest())

  return textsService.fetchTexts()
    .then(payload => dispatch(fetchTextsSuccess(payload)))
    .catch(error => dispatch(fetchTextsFailure(error)))
}

const showText = (id) => (dispatch, getState) => {
  const showTextRequest = () => ({
    type: types.TEXTS_SHOW_REQUEST,
  })

  const showTextSuccess = (payload) => ({
    type: types.TEXTS_SHOW_SUCCESS,
    payload,
  })

  const showTextFailure = (error) => ({
    type: types.TEXTS_SHOW_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(showTextRequest())

  return textsService.showText(id)
    .then(payload => dispatch(showTextSuccess(payload)))
    .catch(error => dispatch(showTextFailure(error)))
}

export default {
  fetchTexts,
  showText,
}

export {
  fetchTexts,
  showText,
}
