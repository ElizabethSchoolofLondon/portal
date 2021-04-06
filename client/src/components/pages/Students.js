// React imports
import * as React from 'react';

import { DataGrid, GridToolbar } from '@material-ui/data-grid';

// Material-UI Core imports
import {
  makeStyles,
  FormControl,
  FormGroup,
  Button,
  InputLabel,
  MenuItem,
  Select,
  LinearProgress,
} from '@material-ui/core'

// Component imports
import Navigation from '../layout/Navigation'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  bodyShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }), 
  },  
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', flex: 1 },
  { field: 'lastName', headerName: 'Last name', flex: 1 },
  { field: 'universityName', headerName: 'University', flex: 1 },
  { field: 'studentStatus', headerName: 'Status', flex: 1 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', universityName: 'Anglia Ruskin University', studentStatus: 'Unconditional' },
  { id: 2, lastName: 'Doe', firstName: 'Jane', universityName: 'University of East London', studentStatus: 'Submitted' },
  { id: 3, lastName: 'Snow', firstName: 'Jon', universityName: 'Anglia Ruskin University', studentStatus: 'Unconditional' },
  { id: 4, lastName: 'Snow', firstName: 'Jon', universityName: 'Anglia Ruskin University', studentStatus: 'Unconditional' },
  { id: 5, lastName: 'Snow', firstName: 'Jon', universityName: 'Anglia Ruskin University', studentStatus: 'Unconditional' },
];


export default function Students() {
  const classes = useStyles();
  return (
    <>
      <Navigation />
      <div style={{marginTop: '100px', display: 'flex', height: '400px', width: '100%'}}>
        <DataGrid 
          components={{
            Toolbar: GridToolbar,
          }}
          rows={rows} 
          columns={columns} 
          pageSize={5} 
          checkboxSelection 
          styles={
            classes.bodyShift
          }
        />
		  </div>	
    </>
  );
};

