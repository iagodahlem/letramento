import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import configureStore from './store/configureStore'
import App from './components/App'
import Game from './containers/Game'
import GameFinal from './containers/GameFinal'
import Home from './containers/Home'
import Text from './containers/Text'

const store = configureStore()

const routes = (
  <Provider store={store}>
    <Router>
      <Switch>
        <App>
          <Route exact path='/' component={Home} />
          <Route exact path='/textos/:id' component={Text} />
          <Route exact path='/textos/:id/jogo' component={Game} />
          <Route exact path='/jogo/final' component={GameFinal} />
        </App>
      </Switch>
    </Router>
  </Provider>
)

export default routes
