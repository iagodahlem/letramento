import React from 'react'
import PropTypes from 'prop-types'
import './GameFinal.css'

const GameFinal = ({ info, text, children }) => (
  <div className='GameFinal'>
    {text && <p className='GameFinal__text'>{text}</p>}
    {info && <p className='GameFinal__info'>{info}</p>}

    <div className='GameFinal__footer'>
      {children}
    </div>
  </div>
)

GameFinal.propTypes = {
  info: PropTypes.string,
  text: PropTypes.string,
}

export default GameFinal
