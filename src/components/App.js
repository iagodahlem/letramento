import React from 'react'
import Footer from './Footer'
import './App.css'

const App = ({ children }) => (
  <div className='App'>
    <main className='App__main'>
      {children}
    </main>
    <Footer />
  </div>
)

export default App
