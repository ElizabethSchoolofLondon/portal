import { createMuiTheme } from '@material-ui/core/styles'
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
      },
    },
  },
  palette: {
    primary: { 
      main: orange[500],
    },
    secondary: { 
      main: '#ffcc80',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: 'Poppins',
  },
})

export default theme
