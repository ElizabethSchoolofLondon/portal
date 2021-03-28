import React, { useEffect } from 'react'
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import theme from './theme'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import University from './components/pages/University'
import Students from './components/pages/Students'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import { Provider } from 'react-redux'
import store from './store'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/university" component={University} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Provider>
  )
}

export default App
