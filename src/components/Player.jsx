import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './Player.css'
import Mark from './Mark.jsx';

function Player({Mode,Players,setPlayers,PlayerInfoshow,handleClose,Setgamestatus,changef}) {
   
    //Player mark setting
    
    

    const handleSubmit=()=>{
        Setgamestatus(true);
    }
    
    //player 1 name setting
    const setplayer1name= (e)=>{
        setPlayers({...Players,
            player1:(e.target.value).toUpperCase()
        })
    }
    //player 2 name setting
    const setplayer2name= (e)=>{
        setPlayers({...Players,
            player2:(e.target.value).toUpperCase()
        })
    }

    
    //for form readonly setting
    var modaltitle ='';
    if (Mode==='SinglePlayer'){
        modaltitle ='YOU VS COMPUTER';
    }
    else{ modaltitle='YOU VS YOUR PARTNER'}
    
    
    
        return (
            <Modal dialogClassName='dialog-box' show={PlayerInfoshow} backdrop="static" onHide={handleClose} keyboard={true}>
                <Modal.Header closeButton closeVariant='white' className='dialog-header'>
                       
                        <h1 className=' dialog-title'>{modaltitle}</h1>
                      
                </Modal.Header>
        
                
                <Modal.Body className='dialog-body'>
                <form role='form'onSubmit={handleSubmit}>
                    <div className="form-row dialog-names">
                        <div className="col mb-3">
                            <label for="validationDefault01">PLAYER 1</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Your Name" value={Players.player1} maxLength = "10" required onChange={(e) => setplayer1name(e)}/>
                        </div>
                        <div className="col mb-3">
                            <label for="validationDefault02">PLAYER 2</label>
                            <input type="text" className="form-control player2-input" id="validationDefault02" placeholder="Your Partner Name" value={Players.player2} readOnly={(Mode==='SinglePlayer')?true:false} maxLength = "10" required onChange={(e) => setplayer2name(e)}/>
                        </div>
                    </div>
                    <div className="form-group dialog-marks">
                        <label className='mb-0'>PICK PLAYER 1'S MARK</label>
                        <Mark Players={Players} setPlayers={setPlayers}></Mark>

                    </div>
                    <div className='text-center'>
                    <button className="btn startgamebtn" type='submit' value='y'>START GAME</button>
                    </div>
                </form>
        </Modal.Body>
        </Modal>
  
)}

export default Player