import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getText, getTextsIsFetching, getTextsErrorMessage } from '../reducers'
import textsActions from '../actions/textsActions'
import Page from '../components/Page'
import TextCard from '../components/TextCard'

class Text extends Component {
  componentDidMount = () => {
    this.show()
  }

  show = () => {
    const showText = this.props.showText
    const id = this.props.id

    showText(id)
  }

  render() {
    const { text, isFetching, errorMessage } = this.props

    return (
      <Page isFetching={isFetching}>
        {errorMessage
          ? `Houve um erro ao carregar o texto. ${errorMessage}`
          : <TextCard text={text} />}
      </Page>
    )
  }
}

Text.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  showText: PropTypes.func.isRequired,
}

const mapStateToProps = (state, { match }) => ({
  id: match.params.id,
  text: getText(state),
  isFetching: getTextsIsFetching(state),
  errorMessage: getTextsErrorMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  showText: (id) => dispatch(textsActions.showText(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Text))
