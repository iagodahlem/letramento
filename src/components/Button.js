import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ onClick, disabled = false, children, transparent = false }) => (
  <button
    className={`Button ${transparent ? 'Button--transparent': ''}`}
    type='button'
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

export default Button
