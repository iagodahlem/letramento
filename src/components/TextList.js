import React from 'react'
import { Link } from 'react-router-dom'
import './TextList.css'

const TextItem = ({ text }) => (
  <div className='TextItem'>
    <div className='TextItem__body'>
      <h3 className='TextItem__title'>{text.title}</h3>
      <p className='TextItem__description'>{text.description}</p>
    </div>

    <footer className='TextItem__footer'>
      <Link className='TextItem__link' to={`/textos/${text.id}`}>Ver Texto</Link>
    </footer>
  </div>
)

const TextList = ({ texts }) => (
  <div className='TextList'>
    {texts.length
      ? texts.map(text => <TextItem key={text.id} text={text} />)
      : 'Nenhum texto.'
    }
  </div>
)

export default TextList
