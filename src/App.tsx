import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material'
import AppBar from './components/AppBar';
import Canvas from './components/Canvas';
import { StoreProvider } from './store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <StoreProvider>
      <ThemeProvider theme={darkTheme}>
        <AppBar/>
        <Canvas />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
