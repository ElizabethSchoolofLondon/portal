import React, { useState } from 'react'
import crown from '../../assets/logo/crown-orange.png'
import { Link } from 'react-router-dom'
import colorPalette from '../../utils/colors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import Navigation from '../layout/Navigation'

import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    paddingTop: 25, 
  },  
  paper: {
    height: 140,
    width: 100,
  },  
  control: {
    padding: theme.spacing(2),
  },  
}));


const Universities = ({}) => {
  const classes = useStyles();

  return (
    <>  
      <Navigation />
      <Container>
       <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))} 
            </Grid>
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Container>
    </> 
  )
}

export default Universities
