import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const words = (state = [], action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
      return action.payload
    case types.RESTART_GAME:
      return []
    default:
      return state
  }
}

const currentWord = (state = '', action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
      return action
        .payload[Math.floor(Math.random() * action.payload.length)]
    case types.RESTART_GAME:
      return action.currentWord
    default:
      return state
  }
}

const guesses = (state = [], action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
    case types.RESTART_GAME:
      return []
    case types.GUESS_LETTER:
      return [...state, action.letter]
    default:
      return state
  }
}

const correctGuesses = (state = [], action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
    case types.RESTART_GAME:
      return []
    case types.GUESS_LETTER:
      return action.guess ? [...state, action.letter] : state
    default:
      return state
  }
}

const lives = (state = 6, action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
    case types.RESTART_GAME:
      return 6
    case types.GUESS_LETTER_FAILURE:
      return state - 1
    default:
      return state
  }
}

const won = (state = false, action) => {
  switch (action.type) {
    case types.START_GAME_SUCCESS:
    case types.RESTART_GAME:
      return false
    case types.GUESS_LETTER_SUCCESS:
      return action.currentWord.split('')
        .every(l => action.correctGuesses.join('').includes(l))
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
  correctGuesses,
  won,
  lives,
  isFetching,
  errorMessage,
})

export default gameReducer

export const getWords = (state) => state.words
export const getCurrentWord = (state) => state.currentWord
export const getGuesses = (state) => state.guesses
export const getCorrectGuesses = (state) => state.correctGuesses
export const getLives = (state) => state.lives
export const getWon = (state) => state.won
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage
