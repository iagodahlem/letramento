import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './TextCard.css'

const TextCard = ({ text }) => (
  <div className='TextCard'>
    <div className='TextCard__content'>
      <h2 className='TextCard__title'>{text.title}</h2>
      <p className='TextCard__description'>{text.description}</p>
      <p className='TextCard__author'>
        <span>por</span> {text.author}
      </p>

      <p className='TextCard__body'>
        {text.body}
      </p>
    </div>

    <footer className="TextCard__footer">
      <Link className='TextCard__link' to={`/textos/${text.id}/jogo`}>
        Iniciar Jogo
      </Link>
    </footer>
  </div>
)

TextCard.propTypes = {
  text: PropTypes.object.isRequired,
}

export default TextCard
