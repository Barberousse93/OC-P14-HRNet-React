/* eslint-disable react/prop-types */
import React from 'react'
import './Modal.css'

function Modal(props) {
  return (
    //   <div className="overlay" onClick={() => props.setIsOpen(false)}>
    <div className="overlay">
      <div className="modale">
        <h1 className="modalText">{props.text}</h1>
        <button className="bouton" onClick={() => props.setIsOpen(false)}>
          X
        </button>
      </div>
    </div>
  )
}

export default Modal
