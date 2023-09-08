/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { styled } from 'styled-components'
// import './Modal.css'

const StyledOverlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  backdrop-filter: blur(5px);
`
const StyledModale = styled.div`
  position: relative;
  height: 100px;
  width: 500px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`
const StyledH1 = styled.h1`
  text-align: center;
  vertical-align: middle;
  line-height: 100px;
  user-select: none;
  color: black;
`
const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 75%;
  right: -20px;
  background-color: blue;
  box-shadow:
    inset -5px -5px 5px rgba(0, 0, 0, 0.5),
    inset 5px 5px 5px rgba(255, 255, 255, 0.5);
  transition: all 0.3s;
  &hover: {
    box-shadow:
      inset 5px 5px 5px rgba(0, 0, 0, 0.5),
      inset -5px -5px 5px rgba(255, 255, 255, 0.5);
  }
`

function Modal(props) {
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  const detectKeyDown = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      props.setIsOpen(false)
      document.removeEventListener('keydown', detectKeyDown, true)
    }
  }

  return (
    <StyledOverlay id="overlay" onClick={() => props.setIsOpen(false)}>
      <StyledModale>
        <StyledH1>{props.text}</StyledH1>
        <StyledButton onClick={() => props.setIsOpen(false)}>X</StyledButton>
      </StyledModale>
    </StyledOverlay>
  )
}

export default Modal
