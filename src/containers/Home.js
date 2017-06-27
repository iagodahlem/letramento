import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTexts, getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import textsActions from '../actions/textsActions'
import Page from '../components/Page'
import TextList from '../components/TextList'

class Home extends Component {
  componentDidMount = () => {
    this.fetch()
  }

  fetch = () => {
    const fetchTexts = this.props.fetchTexts
    fetchTexts()
  }

  render() {
    const { texts, isFetching, errorMessage } = this.props

    return (
      <Page
        header={false}
        title='Letramento'
        description='
          Trabalho de Inteligência Artificial para os cursos de computação da Ulbra.
          Letramento é um jogo da forca para o auxilio no aprendizado de novas palavras e conteúdos,
          utilizando um agente distribuido que minera textos previamente cadastrados.
          Escolha um texto abaixo para começar a jogar.
        '
        isFetching={isFetching}
      >
        {errorMessage
          ? `Houve um erro ao carregar os textos. ${errorMessage}`
          : <TextList texts={texts} />}
      </Page>
    )
  }
}

Home.propTypes = {
  texts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

const mapStateToProps = (state) => ({
  texts: getTexts(state),
  isFetching: getTextsIsFetching(state),
  errorMessage: getTextsErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchTexts: () => dispatch(textsActions.fetchTexts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
