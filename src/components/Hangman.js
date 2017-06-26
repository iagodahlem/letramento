import React from 'react'
import PropTypes from 'prop-types'
import './Hangman.css'

const Hangman = ({ lives }) => (
  <div className='Hangman'>
    <div className='Hangman__head'></div>
    <div className='Hangman__body'></div>
    <div className='Hangman__arm Hangman__arm--left'></div>
    <div className='Hangman__arm Hangman__arm--right'></div>
    <div className='Hangman__leg Hangman__leg--left'></div>
    <div className='Hangman__leg Hangman__leg--right'></div>
  </div>
)

Hangman.propTypes = {
  lives: PropTypes.number.isRequired,
}

export default Hangman
