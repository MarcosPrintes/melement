import { createContext, useState, useEffect } from 'react';
import Layout from './components/Layout/index';
import { Home } from './pages/Home';
import { LightTheme } from './style/themes/light';
import { ThemeProvider } from 'styled-components';
import { ThemeDefault } from './style/themes/default';
import {MyContextProvider} from './contexts/MyContext';

function App() {

  return (
    <MyContextProvider>
      <ThemeProvider theme={ThemeDefault} >
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </MyContextProvider>

  );
}

export default App;
