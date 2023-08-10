/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import './Modal.css'

function ModalComponent(props) {
  const [modal, setModal] = useState(props.open)
  //   console.log('modal', modal)
  const toggleModal = () => {
    setModal(false)
  }
  return (
    <>
        {modal && (
            <div className="overlay" onClick={toggleModal} >
                <div className="modal">
                    <div className="modal-content">
                        <p>{props.text}</p>
                        <button onClick={toggleModal} className="close-modal">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default ModalComponent
