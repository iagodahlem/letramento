import { combineReducers } from 'redux'
import texts, * as fromTexts from './textsReducer'
import game, * as fromGame from './gameReducer'

const rootReducer = combineReducers({
  texts,
  game,
})

export default rootReducer

export const getTexts = (state) => fromTexts.getTexts(state.texts)
export const getText = (state) => fromTexts.getText(state.texts)
export const getTextsIsFetching = (state) => fromTexts.getIsFetching(state.texts)
export const getTextsErrorMessage = (state) => fromTexts.getErrorMessage(state.texts)

export const getWords = (state) => fromGame.getWords(state.game)
export const getCurrentWord = (state) => fromGame.getCurrentWord(state.game)
export const getGuesses = (state) => fromGame.getGuesses(state.game)
export const getLives = (state) => fromGame.getLives(state.game)
export const getGameIsFetching = (state) => fromGame.getIsFetching(state.game)
export const getGameErrorMessage = (state) => fromGame.getErrorMessage(state.game)
