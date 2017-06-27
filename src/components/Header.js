import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ info }) => (
  <header className='Header'>
    <h1 className='Header__title'>
      <Link to='/'>Letramento</Link>
    </h1>

    {info &&
      <p className='Header__info'>
        {info}
      </p>}
  </header>
)

export default Header
