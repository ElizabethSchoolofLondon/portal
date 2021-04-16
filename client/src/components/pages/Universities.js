import React, { useState } from 'react'
import Navigation from '../layout/Navigation'
import Chip from '@material-ui/core/Chip'
import Container from '@material-ui/core/container'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TagFacesIcon from '@material-ui/icons/TagFaces'
import { Box, ListItem, ListItemText } from '@material-ui/core'
import List from '@material-ui/core/List'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  requirementPaper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

const Universities = ({}) => {
  const classes = useStyles()
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'ID' },
    { key: 1, label: 'Diploma' },
    { key: 2, label: 'Personal Statement' },
    { key: 3, label: 'CV' },
    { key: 4, label: 'Share code' },
  ])

  // University requirements  handler
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    )
  }

  // to delete - test for prep class days
  const days = ['Monday 16:30', 'Wednesday 12:00']
  const displayTimeTable = (days) => {
    return days.map((day) => <ListItem>{day}</ListItem>)
  }
  return (
    <>
      <Navigation />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              REQUIREMENTS
              <Paper component="ul" className={classes.requirementPaper}>
                {chipData.map((data) => {
                  let icon

                  if (data.label === 'React') {
                    icon = <TagFacesIcon />
                  }

                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        onDelete={
                          data.label === 'React'
                            ? undefined
                            : handleDelete(data)
                        }
                        className={classes.chip}
                      />
                    </li>
                  )
                })}
              </Paper>
            </Paper>
            <Paper className={classes.paper}>
              PREPARATION CLASS
              <Box item xs={3}>
                <Grid item xs={12} md={6}>
                  <div className={classes.demo}>
                    <List dense={true}>{displayTimeTable(days)}</List>
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className={classes.demo}>
                    <List dense={true}>{displayTimeTable(days)}</List>
                  </div>
                </Grid>
              </Box>
              <Box item xs={6}></Box>
            </Paper>
            <Paper className={classes.paper}>CAMPUS</Paper>
            <Paper className={classes.paper}>MESSAGE FROM ADMIN</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>COURSES</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Universities
