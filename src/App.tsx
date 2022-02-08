import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import AuthPage from './pages/auth/Auth';
import theme from './helpers/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthPage />
    </ThemeProvider>
  );
}

export default App;
