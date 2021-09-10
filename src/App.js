import { Reset } from 'styled-reset';
import React from 'react';
import {Provider} from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './redux/store'

import Home from './pages/Home/index';

import theme from './theme';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
