import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import colorPalette from '../../utils/colors'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../actions/auth'
import SideNav from '../layout/sideNav'

import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const Students = ({}) => {
  // const classes = useStyles()
  /* In case we use Forms
  const [formData, setFormData] = useState({
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
  */
  return <SideNav />
}

export default Students
