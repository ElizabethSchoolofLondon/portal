// React imports
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'

// React Redux imports
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

// Material-UI Core imports
import {
  Drawer,
  makeStyles,
  useTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  MenuItem,
  Button,
  Menu,
  Grid,
} from '@material-ui/core'

// Material-UI Icon imports
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { login } from '../../actions/auth'
import theme from '../../theme'
import { StudentNav, UniversityNav } from './navComponents'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  selected: {
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontWeight: 600,
    },
    '&.Mui-selected:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: 'black',
      fontWeight: 600,
    },
  },
  profileMenu: {
    margin: theme.spacing.unit, // You might not need this now
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    left: theme.spacing.unit * 6,
  },
  menuWidth: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '550px',
  },
}))

const Navigation = ({ auth: { loading, user }, logout }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="inherit"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Grid container direction="row" justify="center" alignItems="center">
            {
              {
                '/students': <Search />,
              }[useLocation().pathname]
            }
          </Grid>
        </Toolbar>
      </AppBar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuItem
            component={Link}
            selected={useLocation().pathname === '/students' ? true : false}
            to="/students"
            classes={{
              selected: classes.selected,
            }}
          >
            My Students
          </MenuItem>
          <MenuItem
            component={Link}
            selected={useLocation().pathname === '/universities' ? true : false}
            to="/universities"
            classes={{
              selected: classes.selected,
            }}
          >
            Universities
          </MenuItem>
          <MenuItem
            component={Link}
            selected={useLocation().pathname === '/sfe' ? true : false}
            to="/sfe"
            classes={{
              selected: classes.selected,
            }}
          >
            Student Finance
          </MenuItem>
          <MenuItem
            component={Link}
            selected={useLocation().pathname === '/performance' ? true : false}
            to="/performance"
            classes={{
              selected: classes.selected,
            }}
          >
            My Performance
          </MenuItem>
        </List>
        <Divider />
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.profileMenu}
        >
          {!loading && (
            <>
              {user ? (
                <Typography>
                  {user.name} {user.surname}
                </Typography>
              ) : (
                <Typography>Logged Out</Typography>
              )}
            </>
          )}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.menuWidth}
        >
          <MenuItem disabled={true} onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem disabled={true} onClick={handleClose}>
            My account
          </MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Drawer>
    </div>
  )
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navigation)
