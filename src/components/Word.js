import React from 'react'
import PropTypes from 'prop-types'
import './Word.css'

const Word = ({ word, guesses }) => (
  <div className="Word">
    {word.split('').map((l, index) =>
      <WordLetter
        key={index}
        letter={l} guesses={guesses} />)}
  </div>
)

const WordLetter = ({ letter, guesses }) => (
  <span className='WordLetter'>
    {guesses.includes(letter.toLowerCase()) ? letter : ' ' }
  </span>
)

Word.propTypes = {
  word: PropTypes.string.isRequired,
  guesses: PropTypes.array.isRequired,
}

WordLetter.propTypes = {
  letter: PropTypes.string.isRequired,
  guesses: PropTypes.array.isRequired,
}

export default Word
