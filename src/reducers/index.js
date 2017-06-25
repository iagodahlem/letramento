import { combineReducers } from 'redux'
import textsReducer, * as fromTexts from './textsReducer'

const rootReducer = combineReducers({
  texts: textsReducer,
})

export default rootReducer

export const getTexts = (state) => fromTexts.getTexts(state.texts)
export const getText = (state) => fromTexts.getText(state.texts)
export const getTextsIsFetching = (state) => fromTexts.getIsFetching(state.texts)
export const getTextsErrorMessage = (state) => fromTexts.getErrorMessage(state.texts)
