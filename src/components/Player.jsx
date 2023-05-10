import React from 'react'
import Modal from 'react-bootstrap/Modal';

function Player({Mode,Players,setPlayers,PlayerInfoshow,handleClose}) {
   

    const getplayer1mark= (player1markv)=>{
        setPlayers({...Players,
            player1mark:player1markv,
            player2mark : player1markv === 'X'? 'O':'X'
        })
    }

    const setplayer1name= (e)=>{
        setPlayers({...Players,
            player1:e.target.value
        })
    }
    
    const setplayer2name= (e)=>{
        setPlayers({...Players,
            player2:e.target.value
        })
    }

    // const [show, setShow] = useState(false);

   
    // const handleShow = () => setShow(true);

    if (Mode==='SinglePlayer'){
        return (
            <Modal show={PlayerInfoshow} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary">Understood</button>
        </Modal.Footer>
      </Modal>
    //     <div >
    //         <div className="form-group">
    //              <label>Your Name</label>
    //              <input type="text" className="form-control" id="player1" value={Players.player1} placeholder="Your Game Name" onChange={(e) => setplayer1name(e)}required/>
    //         </div> 
    //         <div>
    //         <label>Pick your Mark</label>
    //         <div>
    //             <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" onClick={()=>getplayer1mark('X')}/>
    //             <label class="btn btn-outline-success" for="success-outlined">X</label>
    //             <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" onClick={()=>getplayer1mark('O')} />
    //             <label class="btn btn-outline-danger" for="danger-outlined">O</label>
    //         </div>
    //     </div>
    //     </div>
    //       )
    // }
    // if (Mode === 'MultiPlayer'){
    // return(
    //     <div>
    //         <div className="form-group">
    //             <label>Your Name</label>
    //             <input type="text" className="form-control" id="player1" value={Players.player1} placeholder="Your Game Name" onChange={(e) => setplayer1name(e)} required/>
    //         </div>
    //         <div>
    //             <label>Pick your Mark</label>
    //             <div>
    //                 <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" onClick={()=>getplayer1mark('X')}/>
    //                 <label class="btn btn-outline-success" for="success-outlined">X</label>
    //                 <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" onClick={()=>getplayer1mark('O')} />
    //                 <label class="btn btn-outline-danger" for="danger-outlined">O</label>
    //             </div>
    //         </div>
    //         <div className="form-group">
    //             <label >Your Partner Name</label>
    //             <input type="text" className="form-control" id="player2"  value={Players.player2} placeholder="Your partner game name" onChange={(e) => setplayer2name(e)} required/>
    //         </div> 
    //     </div>
                            
    ) }
  
}

export default Player