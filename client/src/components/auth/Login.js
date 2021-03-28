import React, { useState } from 'react'
import crown from '../../assets/logo/crown-orange.png'
import { Link, Redirect } from 'react-router-dom'
import colorPalette from '../../utils/colors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import { ThemeProvider } from '@material-ui/core/styles'

import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

import theme from '../../theme'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.bgGrey,
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

const Login = ({ login, isAuthenticated }) => {
  const [themeSelected, setThemeSelected] = useState("secondary");
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

  const changeTheme = () => {
    if (themeSelected === "primary") setThemeSelected ("secondary");
    else setThemeSelected("primary");
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/university" />
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
            style={{ backgroundColor: colorPalette.light.buttonSelected }}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/register" variant="body2">
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
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, { login })(Login)
