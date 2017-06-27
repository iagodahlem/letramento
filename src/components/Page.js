import React from 'react'
import Spinner from './Spinner'
import Wrapper from './Wrapper'
import './Page.css'

import Header from './Header'

const Page = ({ info, title, description, headerContent, isFetching, children, header = true }) => (
  <div className='Page'>
    {header && <Header info={info} />}
    {(title || description || headerContent) &&
      <header className='Page__header'>
        <Wrapper>
          <h2 className='Page__title'>{title}</h2>
          <p className='Page__description'>
            {description}
          </p>
          {headerContent}
        </Wrapper>
      </header>
    }

    <section className='Page__section'>
      <Wrapper>
        {isFetching ? <Spinner /> : children}
      </Wrapper>
    </section>
  </div>
)

export default Page
