import { Reset } from 'styled-reset';
import React from 'react';
import { ThemeProvider } from 'styled-components';


import Home from './pages/Home/index';

import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
