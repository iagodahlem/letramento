import React from 'react'
import PropTypes from 'prop-types'
import alphabet from '../constants/alphabet'
import './Keyboard.css'

const Keyboard = ({ guesses, onClick }) => (
  <div className='Keyboard'>
    {alphabet.map(l =>
      <KeyboardButton
        key={l}
        letter={l}
        guesses={guesses}
        onClick={onClick}
      />
    )}
  </div>
)

const KeyboardButton = ({ letter, guesses, onClick }) => (
  <button
    className='KeyboardButton'
    type='button'
    disabled={guesses.includes(letter.toLowerCase())}
    onClick={() => onClick(letter)}
  >
    {letter}
  </button>
)

Keyboard.propTypes = {
  guesses: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Keyboard
