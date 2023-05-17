import React, { useRef, useState } from 'react'
import './home.css'
import pencil from '../assets/pencil1.png'
// import circle from '../assets/circle.png'
import Player from './Player'





function Home({Setgamestatus,SetGameMode,Players,setPlayers}) {

    const [f,changef]=useState('n')
    const [Mode,SetMode]=useState('')
    const modeselection= (modev)=>{
        if (modev === 'SinglePlayer'){
            setPlayers({...Players,player2:'COMPUTER'});
        }
        else{
            setPlayers({...Players,player2:''});
        }
        console.log("In home: ",Players.player2);
        SetGameMode(modev);
        SetMode(modev);
        handleShow();
        
    }

    const [PlayerInfoshow, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = (e) =>{
        // window.alert("handle close function")
        // console.log("The value of button",e.target.value)
        if(f==='n'){
            console.log("form not filled")
        }
        else{
            console.log("form filled")
            Setgamestatus(true)
        }
        setShow(false);
    } 

    console.log("form submitted? => ",f)
  return (
    
        <div className="row home-layout mx-auto justify-content-center">
            <div className="col-md-4 d-none d-md-block left-layout mt-3 p-0">    
                <img className='img-fluid h-100' src={pencil} alt="pencil" /> 
            </div>
            <div className="col-md-6 shadow-lg right-layout">
                
                    
                    <div className='row'>
                        <div>
                            <div className='row title mx-1 mt-3'>
                                <p className=' title-x col-2'>X</p>
                                <h4 className=' game-name col p-0 mt-2 text-center '>TIC TAC TOE</h4>
                                <p className=' title-o col-2'>O</p>
                            </div>
                            <div className='game-mode d-flex flex-column'>
                                <div className='col'>
                                    <p className='text-center my-3 mx-3 pickgame'>Pick Your Game Board</p>
                                </div>
                                
                                    <div className='col align-self-center'>
                                    <button class="btn singleplay mb-4 p-4 px-2" onClick={()=>modeselection('SinglePlayer')}> NEW GAME (VS COMPUTER)</button>
                                    </div>
                                    <div className='col align-self-center '>
                                    <button class="btn multiplay  mb-5 p-4" onClick={()=>modeselection('MultiPlayer')} > NEW GAME (VS PLAYER)</button>                                    
                                    </div>
                                
                            </div>
                        </div>

                        <Player Mode={Mode} Players={Players} setPlayers={setPlayers} PlayerInfoshow={PlayerInfoshow} handleClose={handleClose} Setgamestatus={Setgamestatus} changef={changef}/>
                    </div>
                   
            </div>
        </div>
  
  );
}

export default Home;