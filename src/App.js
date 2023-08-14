import React from 'react'
import Router from './Utils/Router'
import Header from './Components/Header';
import { createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import ThemeHandler from './Utils/Theming/ThemeProvider'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

function App() {
  return (
    <div>
      <ThemeHandler>
        <CssBaseline />
        <Header />
        <Router />
      </ThemeHandler>
    </div>
  )
}

export default App;
