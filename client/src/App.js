// React imports
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// React Redux imports
import store from './store'
import { Provider } from 'react-redux'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

// Material-UI Core imports
import {
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core'

// Component imports
import theme from './theme'
import PrivateRoute from './components/routing/PrivateRoute'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Students from './components/pages/Students'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Route exact path="/" component={Login} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/students" component={Students} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}
