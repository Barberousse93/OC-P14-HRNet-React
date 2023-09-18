/* eslint-disable comma-dangle */
import { createTheme } from '@mui/material'

/**
 * Thème light/dark
 */
const LOCAL_STORAGE_KEY = 'isDark'

const DARK_THEME = createTheme({
  palette: {
    mode: 'dark',
  },
})

const LIGHT_THEME = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#586F05',
    },
    secondary: {
      main: '#93AD18',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#343531',
    },
  },
})

export { DARK_THEME, LIGHT_THEME, LOCAL_STORAGE_KEY }
