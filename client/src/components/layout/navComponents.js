import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export const StudentNav = () => {
  const classes = useStyles()
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>April 2021</MenuItem>
          <MenuItem value={20}>September 2021</MenuItem>
          <MenuItem value={30}>January 2022</MenuItem>
        </Select>
        <FormHelperText>Intake</FormHelperText>
      </FormControl>
      <Button variant="contained" color="secondary">
        Default
      </Button>
    </>
  )
}

export const UniversityNav = () => {
  return <div>University</div>
}
