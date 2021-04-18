//region imports
// React imports
import React from 'react'

// Redux imports
import { connect } from 'react-redux'
import { getNonArchivedUniversities } from '../../../actions/university'

// Material-UI Core imports
import {
  fade,
  Fade,
  makeStyles,
  Grid,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  Button,
} from '@material-ui/core'

// Material-UI Icon imports
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import SearchIcon from '@material-ui/icons/Search'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreVertIcon from '@material-ui/icons/MoreVert'
//endregion

//region university page toolbar

const UniversityToolbar = ({ getNonArchivedUniversities }) => {
  getNonArchivedUniversities()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  //region TEST REGION

  const uniName = ['uni one', 'uni two', 'uni three']
  const uniComponent = uniName.map((uni) => (
    <MenuItem key={uni} onClick={handleClose}>
      {uni}
    </MenuItem>
  ))
  //endregion
  return (
    <>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open with fade transition
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {uniComponent}
      </Menu>
    </>
  )
}
//endregion

export default connect(null, { getNonArchivedUniversities })(UniversityToolbar)
