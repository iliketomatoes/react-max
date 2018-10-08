import { createMuiTheme } from '@material-ui/core';

/*
 * See this for properties which can be edited in the theme object
 * https://material-ui.com/customization/default-theme/
 */

const borderRadius = 4;

// Exported properties
export const wrapperMaxWidth = 1600;

const theme = createMuiTheme({
  shape: {
    borderRadius: borderRadius,
  },
   typography: {
    'fontFamily': '\'Source Sans Pro\', \'Helvetica\', \'Arial\', sans-serif',
    'fontWeightLight': 300,
    'fontWeightMedium': 500,
    'fontWeightRegular': 400,
   },
});

export default theme;
