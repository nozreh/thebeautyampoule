import React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import Container from '@material-ui/core/Container';
import Header from '../components/Header';
import ProductHero from '../modules/views/ProductHero';
import theme from '../theme';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
      <ProductHero />
    </ThemeProvider>
  );
}
