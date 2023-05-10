import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './Player.css'

function Player({Mode,Players,setPlayers,PlayerInfoshow,handleClose}) {
   
    //Player mark setting
    const getplayer1mark= (player1markv)=>{
        setPlayers({...Players,
            player1mark:player1markv,
            player2mark : player1markv === 'X'? 'O':'X'
        })
    }
    const getplayer2mark= (player1markv)=>{
        setPlayers({...Players,
            player1mark:player1markv,
            player2mark : player1markv === 'X'? 'O':'X'
        })
    }
    //player 1 name setting
    const setplayer1name= (e)=>{
        setPlayers({...Players,
            player1:e.target.value
        })
    }
    //player 2 name setting
    const setplayer2name= (e)=>{
        setPlayers({...Players,
            player2:e.target.value
        })
    }
    //for form readonly setting
    var modaltitle ='';
    if (Mode==='SinglePlayer'){
        modaltitle ='YOU VS ROBOT';
    }
    else{ modaltitle='YOU VS YOUR PARTNER'}
    
     console.log(Players.player2);
        return (
            <Modal dialogClassName='dialog-box' show={PlayerInfoshow} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header className='dialog-header'>
                        {/* <Modal.Title className='model-t text-center'>  */}
                        <h1 className='text-center dialog-title'>{modaltitle}</h1>
                        {/* </Modal.Title>  */}
                </Modal.Header>
        
                
                <Modal.Body className='dialog-body'>
                <form role='form' onSubmit={handleClose}>
                    <div class="form-row dialog-names">
                        <div class="col mb-3">
                            <label for="validationDefault01">player 1</label>
                            <input type="text" class="form-control" id="validationDefault01" placeholder="Your Name" value={Players.player1} required onChange={(e) => setplayer1name(e)}/>
                        </div>
                        <div class="col mb-3">
                            <label for="validationDefault02">player 2</label>
                            <input type="text" class="form-control" id="validationDefault02" placeholder="Your Partner Name" value={Players.player2} readOnly={(Mode==='SinglePlayer')?true:false} required onChange={(e) => setplayer2name(e)}/>
                        </div>
                    </div>
                    <div className="form-group dialog-marks">
                        <label className='mb-3'>PICK PLAYER 1'S MARK</label>
                        <div className='mark-options d-flex flex-row'>
                            <div className='col'>
                            <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" value='X' checked onClick={()=>getplayer1mark('X')}/>
<label class="btn btn-outline-success" for="success-outlined">X</label>
                            {/* <input type="radio" className="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked onClick={()=>getplayer1mark('X')} required/>
                            <label className="btn btn-outline-success" for="success-outlined">X</label> */}
                            </div>
                            <div className='col'>
                            <input type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" value='O' onClick={()=>getplayer1mark('O')}/>
<label class="btn btn-outline-danger" for="danger-outlined">O</label>
                            {/* <input type="radio" className="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" onClick={()=>getplayer1mark('O')} />
                            <label className="btn btn-outline-danger" for="danger-outlined">O</label> */}
                            </div>
                            
                        </div>
                    </div>
  
  
                    <button class="btn btn-primary" type="submit" onClick={()=>handleClose}>Submit form</button>
                </form>
        </Modal.Body>
        </Modal>
  
)}

export default Player