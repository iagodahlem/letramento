import React from 'react'
import PropTypes from 'prop-types'
import Word from './Word'
import Keyboard from './Keyboard'
// import Hangman from './Hangman'
import './HangmanGame.css'

const HangmanGame = ({ word, lives, guesses, onClickGuess }) => (
  <div className='HangmanGame'>
    {/*<Hangman lives={lives} />*/}
    <Word word={word} guesses={guesses} />
    <Keyboard guesses={guesses} onClick={onClickGuess} />
  </div>
)

HangmanGame.propTypes = {
  word: PropTypes.string.isRequired,
  lives: PropTypes.number.isRequired,
  guesses: PropTypes.array.isRequired,
  onClickGuess: PropTypes.func.isRequired,
}

export default HangmanGame
