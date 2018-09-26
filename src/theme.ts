import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  shape: {
    borderRadius: 2,
  },
   typography: {
    'fontFamily': '\'Source Sans Pro\', \'Helvetica\', \'Arial\', sans-serif',
    'fontWeightLight': 300,
    'fontWeightMedium': 500,
    'fontWeightRegular': 400,
   },
});

export default theme;
