import * as types from '../constants/actionTypes'
import * as textsService from '../services/textsService'
import * as fromReducers from '../reducers'

const startGame = (id) => (dispatch, getState) => {
  const startGameRequest = () => ({
    type: types.START_GAME_REQUEST,
  })

  const startGameSuccess = (payload) => ({
    type: types.START_GAME_SUCCESS,
    payload,
  })

  const startGameFailure = (error) => ({
    type: types.START_GAME_FAILURE,
    message: error.message || 'Alguma coisa deu errado.',
  })

  if (fromReducers.getTextsIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch(startGameRequest())

  return textsService.showText(id)
    .then(text => text.data.document.nodo.map(n => n.name))
    .then(payload => dispatch(startGameSuccess(payload)))
    .catch(error => dispatch(startGameFailure(error)))
}

const guessLetter = (l) => (dispatch, getState) => {
  const currentWord = fromReducers.getCurrentWord(getState()).toLowerCase()
  const letter = l.toLowerCase()
  const guess = currentWord.includes(letter)

  dispatch({
    type: types.GUESS_LETTER,
    letter,
    guess,
  })
}

export default {
  startGame,
  guessLetter,
}

export {
  startGame,
  guessLetter,
}
