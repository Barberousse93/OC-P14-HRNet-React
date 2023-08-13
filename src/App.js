import React
// , { useState }
  from 'react'
import Router from './Utils/Router'
import Header from './Components/Header';
import {
  // ThemeProvider,
  createTheme
} from '@mui/material/styles'
import {
  CssBaseline
  // , Switch
} from '@mui/material'
import ThemeHandler from './Utils/Theming/ThemeProvider'

// const selectedTheme = useSelector((state) => state.darkTheme)

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
  // const [theme, setTheme] = useState(lightTheme)
  // const handleTheme = () => {
  //   if (theme === lightTheme) {
  //     setTheme(darkTheme)
  //   } else {
  //     setTheme(lightTheme)
  //   }
  // }

  return (
    <div>
      <ThemeHandler>
        <CssBaseline />
        {/* <Switch onChange={handleTheme}></Switch> */}
        <Header />
        <Router />
      </ThemeHandler>
    </div>
  )
}

export default App;
