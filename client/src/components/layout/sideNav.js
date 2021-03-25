import React, { useState } from 'react'
import crown from '../../assets/logo/crown-orange.png'
import { Link } from 'react-router-dom'
import colorPalette from '../../utils/colors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'

import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const SideNav = () => {
  return (
    <Container>
      <Button variant="contained">Default</Button>
    </Container>
  )
}

export default SideNav
