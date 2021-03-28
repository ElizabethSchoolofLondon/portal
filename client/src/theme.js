import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
			bgGrey: '#c1c1c1',
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme
