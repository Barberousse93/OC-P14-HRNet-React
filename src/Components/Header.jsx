/* eslint-disable react/prop-types */
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { Typography } from '@mui/material'

function Header() {
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

    </header>
  )
}

export default Header
