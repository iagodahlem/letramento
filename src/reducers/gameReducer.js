import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const words = (state = [], action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
      return action.payload
    default:
      return state
  }
}

const currentWord = (state = '', action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
      const payload = action.payload
      const index = Math.floor(Math.random() * payload.length)
      return payload[index]
    default:
      return state
  }
}

const guesses = (state = [], action) => {
  switch (action.type) {
    case types.GUESS_LETTER:
      return [...state, action.letter]
    default:
      return state
  }
}

const lives = (state = 6, action) => {
  switch (action.type) {
    case types.GUESS_LETTER:
      return action.guess ? state : state - 1
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.START_GAME_REQUEST:
      return true
    case types.START_GAME_SUCCESS:
    case types.START_GAME_FAILURE:
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.START_GAME_FAILURE:
      return action.message
    case types.START_GAME_REQUEST:
    case types.START_GAME_SUCCESS:
      return null
    default:
      return state
  }
}

const gameReducer = combineReducers({
  words,
  currentWord,
  guesses,
  lives,
  isFetching,
  errorMessage,
})

export default gameReducer

export const getWords = (state) => state.words
export const getCurrentWord = (state) => state.currentWord
export const getGuesses = (state) => state.guesses
export const getLives = (state) => state.lives
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage