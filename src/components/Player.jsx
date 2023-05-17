import React, { useRef } from 'react'
import Modal from 'react-bootstrap/Modal';
import './Player.css'
import Mark from './Mark.jsx';

function Player({Mode,Players,setPlayers,PlayerInfoshow,handleClose,Setgamestatus,changef}) {
   
    //Player mark setting
    const getplayer1mark= (player1markv)=>{
        // var val = document.getElementByName('options-outlined').checkvalue;
        var val = document.querySelector("input[className='btn-check']");
        console.log("SELECTED",val)
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

    const handleSubmit=(event)=>{
        Setgamestatus(true);
        console.log(event);
        
        // event.preventDefault();
    }
    const handlecancel=()=>{
        // if(val=== true){
        //     console.log("Form Submit");
        // }
        // else{
        //     console.log("Form cancle");
        // }
       
        // Setgamestatus=false;
        console.log("APFSNNNNNNNNNNNNNNNpa:::::::::::SF")
        handleClose();
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
    const checkvalue=()=>{
        var val = document.getElementByName('options-outlined').checkvalue;
        console.log("SELECTED",val)
    }
    
     console.log(Players.player2);
        return (
            <Modal dialogClassName='dialog-box' show={PlayerInfoshow} backdrop="static" onHide={handleClose} keyboard={true}>
                <Modal.Header closeButton closeVariant='white' className='dialog-header'>
                        {/* <Modal.Title className='model-t text-center'>  */}
                        <h1 className=' dialog-title'>{modaltitle}</h1>
                        {/* </Modal.Title>  */}
                </Modal.Header>
        
                
                <Modal.Body className='dialog-body'>
                <form role='form'onSubmit={handleSubmit}>
                    <div class="form-row dialog-names">
                        <div class="col mb-3">
                            <label for="validationDefault01">PLAYER 1</label>
                            <input type="text" className="form-control" id="validationDefault01" placeholder="Your Name" value={Players.player1} maxlength = "10" required onChange={(e) => setplayer1name(e)}/>
                        </div>
                        <div class="col mb-3">
                            <label for="validationDefault02">PLAYER 2</label>
                            <input type="text" className="form-control player2-input" id="validationDefault02" placeholder="Your Partner Name" value={Players.player2} readOnly={(Mode==='SinglePlayer')?true:false} maxlength = "10" required onChange={(e) => setplayer2name(e)}/>
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