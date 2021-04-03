import { createMuiTheme } from '@material-ui/core/styles';
import Poppins from './fonts/Poppins/Poppins-Light.ttf';

const poppins = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Poppins'),
    local('Poppins-Light'),
    url(${Poppins}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, Open Sans',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppins],
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#efeefe',
    },
    background: {
      default: '#fff',
    },
  }
});

export default theme;
