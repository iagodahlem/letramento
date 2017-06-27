import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as gameActions from '../actions/gameActions'
import * as fromReducers from '../reducers'
import Button from '../components/Button'
import GameFinal from '../components/GameFinal'
import HangmanGame from '../components/HangmanGame'
import Page from '../components/Page'

class Game extends Component {
  componentDidMount() {
    this.start()
  }

  start = () => {
    const startGame = this.props.startGame
    const id = this.props.id

    startGame(id)
  }

  restart = () => {
    const restartGame = this.props.restartGame

    restartGame()
  }

  guess = (letter) => {
    const guessLetter = this.props.guessLetter

    guessLetter(letter)
  }

  renderGameWinLose() {
    const { currentWord, guesses, lives, won } = this.props

    if (lives <= 0) {
      return (
        <GameFinal info='Você PERDEU.'>
          <Button onClick={this.restart}>
            Reiniciar
          </Button>

          <Button onClick={this.start}>
            Outra palavra
          </Button>
        </GameFinal>
      )
    }

    if (won) {
      return (
        <GameFinal info={currentWord} text='Você GANHOU.'>
          <Button onClick={this.start}>
            Outra palavra
          </Button>
        </GameFinal>
      )
    }

    return (
      <HangmanGame
        word={currentWord}
        lives={lives}
        guesses={guesses}
        onClickGuess={this.guess}
      />
    )
  }

  render() {
    const { lives, isFetching, errorMessage } = this.props

    return (
      <Page info={`Vidas: ${lives}`} isFetching={isFetching}>
        {errorMessage
          ? `Houve um erro ao carregar os dados. ${errorMessage}`
          : this.renderGameWinLose()}
      </Page>
    )
  }
}

Game.propTypes = {
  id: PropTypes.string.isRequired,
  currentWord: PropTypes.string.isRequired,
  guesses: PropTypes.array.isRequired,
  lives: PropTypes.number.isRequired,
  won: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  startGame: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
  guessLetter: PropTypes.func.isRequired,
}

const mapStateToProps = (state, { match }) => ({
  id: match.params.id,
  currentWord: fromReducers.getCurrentWord(state),
  guesses: fromReducers.getGuesses(state),
  lives: fromReducers.getLives(state),
  won: fromReducers.getWon(state),
  isFetching: fromReducers.getGameIsFetching(state),
  errorMessage: fromReducers.getGameErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  startGame: (id) => dispatch(gameActions.startGame(id)),
  restartGame: (id) => dispatch(gameActions.restartGame(id)),
  guessLetter: (letter) => dispatch(gameActions.guessLetter(letter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
