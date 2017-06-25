import React from 'react'
import PropTypes from 'prop-types'
import './Word.css'

const Word = ({ word, guesses }) => (
  <div className="Word">
    {word.split('').map((l, index) => <Letter key={index} letter={l} guesses={guesses} />)}
  </div>
)

const Letter = ({ letter, guesses }) => (
  <span>
    {guesses.includes(letter) ? letter : ' _ ' }
  </span>
)

Word.propTypes = {
  word: PropTypes.string.isRequired,
  guesses: PropTypes.array.isRequired,
}

export default Word
