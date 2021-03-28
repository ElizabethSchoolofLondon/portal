import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { login } from '../../actions/auth'
import Colors from '../../utils/colors' 

const drawerWidth = 240;
const light = Colors.light;
const dark = Colors.dark;

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
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
	
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
       backgroundColor: light.orange,
       color: "white",
       fontWeight: 600
    },
    '&.Mui-selected:hover': {
       backgroundColor: light.grey,
       color: "white",
       fontWeight: 600
    },
  },
}));

const PersistentDrawerLeft = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <MenuItem 
            component={Link} 
            linkButton={true} 
            selected={useLocation().pathname == "/students" ? true : false} 
            to="/students"
            classes={{
              selected: classes.selected,
            }}
          >
            My Students
          </MenuItem>
          <MenuItem 
            component={Link} 
            linkButton={true} 
            selected={useLocation().pathname === "/university" ? true : false} 
            to="/university"
            classes={{
              selected: classes.selected,
            }}
          >
            University
          </MenuItem>
          <MenuItem 
            component={Link} 
            linkButton={true} 
            selected={useLocation().pathname === "/sfe" ? true : false} 
            to="/sfe"
            classes={{
              selected: classes.selected,
            }}
          >
            Student Finance
          </MenuItem>
          <MenuItem 
            component={Link} 
            linkButton={true} 
            selected={useLocation().pathname === "/performance" ? true : false} 
            to="/performance"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            My Performance
          </MenuItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

export default PersistentDrawerLeft
