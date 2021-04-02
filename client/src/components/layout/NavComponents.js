import React from 'react';

import {
  makeStyles,
	Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Button,
  TextField,
  IconButton,
  Menu,
  Badge,
  Toolbar,
} from '@material-ui/core';

import {
  SearchIcon,
} from '@material-ui/icons';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
		maxHeight: '64px',
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
		minWidth: '250px',
		maxWidth: '250px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export const Search = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="4 New Notifications" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="4 New Notifications" color="inherit">
          <Badge badgeConteont={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );
  
  return (
    <div className={classes.grow}>
    <div style={{display:'flex', maxHeight: '64px'}}>
      <div className={classes.search}>
        <Autocomplete
          freeSolo
          id="search-input"
          disableClearable
          options={filterOptions.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search..." margin="normal" variant="outlined" size="small"/>
          )}
        />
      </div>
      <div className={classes.grow} />
      <div className={classes.sectionDesktop}>
        <IconButton aria-label="show 11 new notifications" color="inherit" className={classes.button}>
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon styles={{borderRadius: 100}}/>
          </Badge>
        </IconButton>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="Show More"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderMenu}
      </div>
    </div>
  )
}

const filterOptions = [
  { name: 'Martin Kirilov' },
  { name: 'Rafin Rahman' },
]
