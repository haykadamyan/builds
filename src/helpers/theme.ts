import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#885FFF',
    },
    secondary: {
      main: '#414046',
    }
  },
  typography: {
    body1: {
      fontSize: '14px',
    },
    body2: {
      color: '#6F6E73',
      fontSize: '12px',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: "8px", backgroundColor: "#FCFCFC" }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: 16,
          borderRadius: '10px',
          lineHeight: '22px',
          fontWeight: '600 !important',
          padding: '10px 18px',
        },
      },
    },
  },
});

export default theme;
