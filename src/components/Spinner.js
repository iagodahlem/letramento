import React from 'react'
import './Spinner.css'

const Spinner = () => (
  <span className="Spinner">
    <span className="Spinner__bounce Spinner__bounce--1"></span>
    <span className="Spinner__bounce Spinner__bounce--2"></span>
    <span className="Spinner__bounce Spinner__bounce--3"></span>
  </span>
)

export default Spinner
