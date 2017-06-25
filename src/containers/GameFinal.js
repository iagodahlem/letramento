import React, { Component } from 'react'

class GameFinal extends Component {
  render() {
    return (
      <div>
        <h2>Jogo Final / Ganhou || Perdeu</h2>

        <div>
          <p>Se Errou</p>
          <button>Tentar Novamente</button>
          <button>Escolher Outro Texto</button>
        </div>

        <div>
          <p>Se Ganhou</p>
          <p>Pontos: 1, 2</p>
          <p>tempo</p>
          <button>Escolher Outro Texto</button>
        </div>
      </div>
    )
  }
}

export default GameFinal
