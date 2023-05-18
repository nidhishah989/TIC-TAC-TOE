import {React} from 'react'
import Modal from 'react-bootstrap/Modal';

function Declaration({drtitle,drmessage,show,handlequit,handlecontinue}) {
    
  return (
    <Modal show={show} centered>
        <Modal.Header className='mheader'>
          <Modal.Title ><h6 className='mtitleclass'>{drtitle}</h6></Modal.Title>
        </Modal.Header>
        <Modal.Body className='msbody'><h2 className='drmsg'> {drmessage}</h2></Modal.Body>
        <Modal.Footer className='msfoot'>
          <button className='btn continuebutton' onClick={handlecontinue} >
            PLAY AGAIN
          </button>
          <button className="btn quitbutton" onClick={handlequit} >
            QUIT
          </button>
        </Modal.Footer>
      </Modal>
  )
}

export default Declaration;