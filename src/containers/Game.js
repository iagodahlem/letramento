import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as gameActions from '../actions/gameActions'
import * as fromReducers from '../reducers'
import Page from '../components/Page'
import HangmanGame from '../components/HangmanGame'

class Game extends Component {
  componentDidMount = () => {
    this.start()
  }

  start = () => {
    const startGame = this.props.startGame
    const id = this.props.id

    startGame(id)
  }

  guess = (letter) => {
    const guessLetter = this.props.guessLetter
    guessLetter(letter)
  }

  render() {
    const {
      currentWord,
      guesses,
      lives,
      isFetching,
      errorMessage,
    } = this.props

    return (
      <Page isFetching={isFetching}>
        {errorMessage
          ? `Houve um erro ao carregar os dados. ${errorMessage}`
          : <HangmanGame
              word={currentWord}
              lives={lives}
              guesses={guesses}
              onClickGuess={this.guess}
            />}
      </Page>
    )
  }
}

Game.propTypes = {
  id: PropTypes.string.isRequired,
  currentWord: PropTypes.string.isRequired,
  guesses: PropTypes.array.isRequired,
  lives: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  startGame: PropTypes.func.isRequired,
  guessLetter: PropTypes.func.isRequired,
}

const mapStateToProps = (state, { match }) => ({
  id: match.params.id,
  currentWord: fromReducers.getCurrentWord(state),
  guesses: fromReducers.getGuesses(state),
  lives: fromReducers.getLives(state),
  isFetching: fromReducers.getGameIsFetching(state),
  errorMessage: fromReducers.getGameErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  startGame: (id) => dispatch(gameActions.startGame(id)),
  guessLetter: (letter) => dispatch(gameActions.guessLetter(letter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
