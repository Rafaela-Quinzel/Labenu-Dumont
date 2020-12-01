import React from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme';
import styled from 'styled-components'
import MainAppBar from './components/MainAppBar/MainAppBar'

const Container = styled.div`
  padding-top: 64px;
`


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainAppBar />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
