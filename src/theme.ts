import { createMuiTheme } from '@material-ui/core';

/*
 * TODO Use these SCSS variables in the theme
 * See this for properties which can be edited in the theme object
 * https://material-ui.com/customization/default-theme/
 */

// $white: #fff;
// $black: #000;

// $mid-grey: #969696;
// $dark-grey: #474645;

// $blue1: #DEE9F6;
// $blue2: #00A4E4;
// $blue3: #0057B8;
// $blue4: #001B48;

// $blue-grey0: #F7F9FB;
// $blue-grey1: #E0E5EB;
// $blue-grey2: #BCC6D2;
// $blue-grey3: #95A4B4;
// $blue-grey4: #69707F;
// $blue-grey5: #2E3844;

// $shadow-sm: 0px 2px 8px 0px rgba(188,198,210,.5);
// $shadow-lg: 0px 2px 10px 0px rgba(188,198,210,.8);

// $active-color: $blue2;
// $keyline: 1px solid $blue-grey1;
// $keyline-dark: 1px solid $blue-grey2;
const borderRadius = 4;

// $timing-fast: .25s;
// $timing-medium: .5s ease-in-out;
// $timing-slow: 1s ease-in-out;

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
