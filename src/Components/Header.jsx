/* eslint-disable react/prop-types */
import './Header.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { Switch, Typography } from '@mui/material'
import ThemeContext from '../Utils/Theming/ThemeContext'

function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  return (
    <header>
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="logo HRNet" width={'150px'} height={'138px'} />
        </Link>
        <Typography variant="h3" component="h1">
          HRNet
        </Typography>
      </div>
      <Typography>
        <label htmlFor="switchTheme">
          Switch to {isDark ? 'light theme' : 'dark theme'}
          <Switch name="switchTheme" checked={isDark} onChange={toggleTheme} />
        </label>
      </Typography>
    </header>
  )
}

export default Header
