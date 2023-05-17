import {React,useState,useEffect,useRef} from 'react'
import './gameboard.css'
import Square from './square.jsx'
import Declaration from './declaration.jsx';

function Gameboard ({Setgamestatus,Players}){

    
    const win = useRef(null)
    useEffect(() => { 
        if(win.current === null){
            console.log("Effect ran"); 
        }
        else{
            console.log("winner change")
            setShow(true)
        }
       
      },[win.current]);
    
    // for game-board status
    const [squares,setsquare]=useState(Array(9).fill(null));
    // for player turn
    const [player1turn,setplayer1turn] = useState(true)
    // for dynamic styling for player information
    let player1style = Players.player1mark === 'X' ?'x-player' :'o-player';
    const player2style = Players.player2mark === 'X'?'x-player' :'o-player';

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    // handle winner calculation
    const checkWinner= ()=>{
        console.log("Checking winner")
        const winnerposs= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [3,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        for( let i=0; i<winnerposs.length;i++){
            const [a,b,c]=winnerposs[i]
            console.log(a,b,c)
            if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
              const winnername = squares[a] === Players.player1mark ? Players.player1 :squares[a] === Players.player2mark ? Players.player2 :'';
            //   alert("WINNER- ",winnername)
            //   handleShow();
              win.current=winnername;
              console.log("inside checkwinner: ",win.current)
              return winnername;
              
            }
        }

        return null;

    }

    const checkGameOver=()=>{
        if (squares.includes(null)){
            return false;
        }
        else{
            // alert("Game Over")
            return true;
        }
    }
    
    var winner = checkWinner();
    var gameover = checkGameOver();

    console.log("WINNER IS: ",winner)
    console.log("IS GAME OVER? ",gameover)
    //Handle process when player click on button
    const handleSQClick= (index)=>{
        
        const squarenewstate = squares.slice()
        //check the index is null or not
        // if player 1 turn: player1 mark will show otherwise player 2
        if(squarenewstate[index]===null) {
            squarenewstate[index]= player1turn ? Players.player1mark : Players.player2mark;
            setsquare(squarenewstate)
            setplayer1turn(!player1turn)
            
        }
            console.log(squares)
            // setplayer1turn(!player1turn)
            //check winner
        }

        
    // }
        
    
   
    //change to empty everything
    const gamestatusset= ()=>
    {
        Setgamestatus(false)
    }
    
    // winner -> yes-> declare winner
    // winner -> no-> gameover-> yes-> declare game over
    // winner -> no-> gameover-> no-> continue game 
    return (
        <div className=' container gameboardwindow'>
            {/* Board game title*/}
            <div className='row board-title'>
                <div className='col-sm-10 text-center p-0'>
                    <h1> TIC TAC TOE </h1>
                </div>
                <div className='col-sm-2 p-0'>
                    <button className='btn' onClick={gamestatusset}><i className="bi bi-house-gear-fill"></i></button> 
                </div>
            </div>
             {/* Player information*/}
            <div className='row playerinfoboard text-center'>
                <div className= {`col player1info ${player1turn ? player1style: ''}`}>
                    <div className='d-flex justify-content-center gap-1'>
                    <i className="bi bi-person-fill"></i> {Players.player1} ({Players.player1mark})
                    </div>
                    <div>
                        {Players.player1mark}
                    </div>
                </div>
                {/* <div className='col-4 text-center my-auto'>
                    Tie-0
                </div> */}
                <div className={`col player1info ${player1turn ? '': player2style}`}>
                <div className='d-flex justify-content-center gap-1'>
                    <i className="bi bi-person-fill"></i> {Players.player2} ({Players.player2mark})
                    </div>
                    <div >
                        {Players.player2mark}
                    </div>
                </div>
            </div>
             {/* Game Board*/}
            <div className='boardwindow py-3'>
            <div class="row board-row pt-3">
                <div class="col">
                    <Square value={squares[0]} handleSQClick={()=>handleSQClick(0)}></Square>   
                </div>
                <div class="col">
                    <Square value={squares[1]} handleSQClick={()=>handleSQClick(1)}></Square>
                </div>
                <div class="col">
                    <Square value={squares[2]} handleSQClick={()=>handleSQClick(2)}></Square>
                </div>
            </div>
            <div class="row board-row">
                <div class="col">
                    <Square value={squares[3]} handleSQClick={()=>handleSQClick(3)}></Square>   
                </div>
                <div class="col">
                    <Square value={squares[4]} handleSQClick={()=>handleSQClick(4)}></Square>
                </div>
                <div class="col">
                    <Square value={squares[5]} handleSQClick={()=>handleSQClick(5)}></Square>
                </div>
            </div>
            <div class="row board-row">
                <div class="col">
                    <Square value={squares[6]} handleSQClick={()=>handleSQClick(6)}></Square>   
                </div>
                <div class="col">
                    <Square value={squares[7]} handleSQClick={()=>handleSQClick(7)}></Square>
                </div>
                <div class="col">
                    <Square value={squares[8]} handleSQClick={()=>handleSQClick(8)}></Square>
                </div>
            </div>
            </div>
            <Declaration show={show}></Declaration>:''
        </div>
    );
}

export default Gameboard;