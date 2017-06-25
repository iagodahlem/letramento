import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <header className='Header'>
    <h1 className='Header__title'>
      <Link to='/'>Letramento</Link>
    </h1>

    {/*<nav className='Header__nav'>
      <ul>
        <li>
          <NavLink exact className='Header__navLink' activeClassName='is-active' to='/'>
            Textos
          </NavLink>
        </li>
        <li>
          <NavLink exact className='Header__navLink' activeClassName='is-active' to='/textos/novo'>
            Novo Texto
          </NavLink>
        </li>
      </ul>
    </nav>*/}
  </header>
)

export default Header
