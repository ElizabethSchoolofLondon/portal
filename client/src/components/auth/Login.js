// React imports
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// React Redux imports
import { connect } from 'react-redux'
import { login } from '../../actions/auth'
import { setAlert } from '../../actions/alert'

// Material-UI Core imports
import {
  Container,
  Button,
  Typography,
  Grid,
  TextField,
  Paper,
  Link,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core'

// Component imports
import theme from '../../theme'
import crown from '../../assets/logo/crown-orange.png'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login = ({ login, isAuthenticated, setAlert, alerts }) => {
  console.log(alerts)
  const classes = useStyles()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  const onSubmit = async (e) => {
    e.preventDefault()
    login(email, password)
  }

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/students" />
  }
  return (
    <ThemeProvider theme={theme}>
      <Container components="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={10}>
          <img src={crown} alt="" height={50} />

          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={alerts.length > 0}
                  helperText={alerts.length > 0 ? alerts[0].msg : ''}
                  value={email}
                  onChange={(e) => onChange(e)}
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={
                    alerts.length > 0 &&
                    alerts[0].msg === 'Invalid login details'
                  }
                  helperText={alerts.length > 0 ? alerts[0].msg : ''}
                  value={password}
                  onChange={(e) => onChange(e)}
                  name="password"
                  variant="outlined"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // style={{ backgroundColor: colorPalette.light.buttonSelected }}
              className={classes.submit}
              color="secondary"
            >
              Sign In
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="/register"
                  color="secondary"
                  underline="hover"
                  variant="body2"
                >
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alert,
})
export default connect(mapStateToProps, { login, setAlert })(Login)
