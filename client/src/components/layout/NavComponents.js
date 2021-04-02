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
} from '@material-ui/core';

import {
  SearchIcon,
  NotificationsIcon,
  MoreIcon
} from '@material-ui/icons';

import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
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
      <div className={classes.search}>
        <Autocomplete
          freeSolo
          id="search-input"
          disableClearable
          options={filterOptions.map((option) => option.name)}
          renderInput={(params) => (
            <TextField {...params} label="Search..." margin="normal" variant="outlined" />
          )}
        />
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="4 New Notifications" color="inherit">
            <Badge badgeConteont={4} color="secondary">
              <NotificationsIcon />
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
      </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}

const filterOptions = [
  { name: 'Martin Kirilov' },
  { name: 'Rafin Rahman' },
]
