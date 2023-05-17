import {React,useState} from 'react'
import Modal from 'react-bootstrap/Modal';

function Declaration({show}) {
    
  return (
    <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" >
            Close
          </button>
          <button variant="primary" >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
  )
}

export default Declaration;