import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './components/Main/container';
import ProductProvider from './features/providers/product/provider';
import CategoryProvider from './features/providers/category/provider';
import CheckoutProvider from './features/providers/checkout/provider';
import CartProvider from './features/providers/cart/provider';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20B2AA',
    },
    secondary: {
      main: '#F08080',
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto'].join(','),
  },
});
ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <ProductProvider>
        <CartProvider>
          <CheckoutProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainContainer />
            </ThemeProvider>
          </CheckoutProvider>
        </CartProvider>
      </ProductProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
