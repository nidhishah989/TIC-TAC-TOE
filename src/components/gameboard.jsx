import {React,useState,useEffect,useRef} from 'react'
import './gameboard.css'
import Square from './square.jsx'
import Declaration from './declaration.jsx';

function Gameboard ({Setgamestatus,Players,GameMode,setPlayers,SetGameMode}){
   
    // for game-board status
    const [squares,setsquare]=useState(Array(9).fill(null));
    // for player turn
    const [player1turn,setplayer1turn] = useState(true)
    // for dynamic styling for player information
    let player1style = Players.player1mark === 'X' ?'x-player' :'o-player';
    const player2style = Players.player2mark === 'X'?'x-player' :'o-player';
    const [show,setShow] = useState(false)
    // const show =useRef(false)
    const computerturn=useRef(false)
    const win = useRef(null)
    const gover = useRef(false)
    var drtitle = useRef('')
    var drmessage = useRef('')
    const handleshow =()=> {setShow(true)}
    useEffect(() => { 
        if(win.current != null){
            win.current === Players.player1 ? setPlayers({...Players,player1win : Players.player1win+1}) : setPlayers({...Players,player2win :Players.player2win+1})
            
            if(win.current==='COMPUTER' && GameMode==='SinglePlayer'){
                drtitle.current = "Oh No! YOU LOST.";
                drmessage.current= win.current + " win this round."
            }
            else{
                drtitle.current = "Congratulations!!!";
                drmessage.current= win.current + " win this round."
            }
            handleshow()
           
        }
        if(gover.current && win.current===null){
            drtitle.current = "Oh No!!!";
            drmessage.current= "No one win this round."
            handleshow()
        }
        
      },[win.current,gover.current]);
      
      useEffect(()=>{
        
        if(GameMode === 'SinglePlayer' && !player1turn && win.current===null){
            computerturn.current=true
            //computer pick any random empty square to fill
            let emptyindexes = squares.map((square,index)=>{return square==null?index:null }).filter(val=>val!=null)
            // now random index pick and change the state of board with computer move
            let cindex = Math.floor(Math.random() * emptyindexes.length)
            const newsqaures = squares.slice()
            newsqaures[emptyindexes[cindex]]= player1turn ? Players.player1mark : Players.player2mark;
            setsquare(newsqaures)
            setplayer1turn(!player1turn)
            computerturn.current=false
            win.current=checkWinner(newsqaures);
            gover.current=checkGameOver(newsqaures);
        }
      },[squares])
    
    // handle winner calculation
    const checkWinner= (newsqur)=>{
        console.log("checking winner")
        const winnerposs= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        
        for( let i=0; i<winnerposs.length;i++){
            const [a,b,c]=winnerposs[i]
            if(newsqur[a] && newsqur[a]===newsqur[b] && newsqur[b]===newsqur[c]){
              const winnername = newsqur[a] === Players.player1mark ? Players.player1 :newsqur[a] === Players.player2mark ? Players.player2 :'';
            //   win.current=winnername;
               return winnername;
              
            }
        }

        return null;

    }

    const checkGameOver=(newsqure)=>{
        if (newsqure.includes(null)){
            // gover.current=false;
            return false;
        }
        else{
            // gover.current=true;
            return true;
        }
    }
    
    // win.current=checkWinner();
    // gover.current=checkGameOver();

    //Handle process when player click on button
    const handleSQClick= (index)=>{
        console.log("handling player click")
        const squarenewstate = squares.slice()
        //check the index is null or not
        // if player 1 turn: player1 mark will show otherwise player 2
        if(squarenewstate[index]===null) {
           
            squarenewstate[index]= player1turn ? Players.player1mark : Players.player2mark;
            setsquare(squarenewstate)
            setplayer1turn(!player1turn)
            win.current=checkWinner(squarenewstate);
            gover.current=checkGameOver(squarenewstate);

        }
        }
        
    
   
    //change to empty everything
    const handlequit= ()=>
    {
        Setgamestatus(false);
        setPlayers({...Players,
            player2:'',
            player1:'',
            player1win:0,
            player2win:0});
        SetGameMode('');
    }

    const handlecontinue =()=>{
        setsquare(Array(9).fill(null))
        setplayer1turn(true)
        win.current=null
        gover.current=false
        setShow(false)
    }
    
    // winner -> yes-> declare winner
    // winner -> no-> gameover-> yes-> declare game over
    // winner -> no-> gameover-> no-> continue game 
    return (
        <div className=' container gameboardwindow'>
            {/* Board game title*/}
            <div className='row board-title'>
                <div className='col-10 text-center p-0'>
                    <h1> TIC TAC TOE </h1>
                </div>
                <div className='col-2 p-0'>
                    <button className='btn' onClick={handlequit}><i className="bi bi-house-gear-fill"></i></button> 
                </div>
            </div>
             {/* Player information*/}
            <div className='row playerinfoboard text-center'>
                <div className= {`col player1info ${player1turn ? player1style: ' player1turnoff'}`}>
                    <div className='d-flex justify-content-center gap-1'>
                    <i className="bi bi-person-fill"></i> {Players.player1} ({Players.player1mark})
                    </div>
                    <div className='pb-3'>
                        WIN - {Players.player1win}
                    </div>
                </div>
                <div className={`col player2info ${player1turn ? ' player1turnoff': player2style}`}>
                <div className='d-flex justify-content-center gap-1'>
                    <i className="bi bi-person-fill"></i> {Players.player2} ({Players.player2mark})
                    </div>
                    <div className='pb-3'>
                        WIN - {Players.player2win}
                    </div>
                </div>
            </div>
             {/* Game Board*/}
            <div className='boardwindow pb-3 pt-1'>
            <div className="row board-row pt-3">
                <div className="col">
                    <Square value={squares[0]} handleSQClick={()=>!computerturn.current && handleSQClick(0)}></Square>   
                </div>
                <div className="col">
                    <Square value={squares[1]} handleSQClick={()=>!computerturn.current && handleSQClick(1)}></Square>
                </div>
                <div className="col">
                    <Square value={squares[2]} handleSQClick={()=>!computerturn.current && handleSQClick(2)}></Square>
                </div>
            </div>
            <div className="row board-row">
                <div className="col">
                    <Square value={squares[3]} handleSQClick={()=>!computerturn.current && handleSQClick(3)}></Square>   
                </div>
                <div className="col">
                    <Square value={squares[4]} handleSQClick={()=>!computerturn.current && handleSQClick(4)}></Square>
                </div>
                <div className="col">
                    <Square value={squares[5]} handleSQClick={()=>!computerturn.current && handleSQClick(5)}></Square>
                </div>
            </div>
            <div className="row board-row">
                <div className="col">
                    <Square value={squares[6]} handleSQClick={()=>!computerturn.current && handleSQClick(6)}></Square>   
                </div>
                <div className="col">
                    <Square value={squares[7]} handleSQClick={()=>!computerturn.current && handleSQClick(7)}></Square>
                </div>
                <div className="col">
                    <Square value={squares[8]} handleSQClick={()=>!computerturn.current && handleSQClick(8)}></Square>
                </div>
            </div>
            </div>
            <Declaration drtitle={drtitle.current} drmessage={drmessage.current} show={show} handlequit={handlequit} handlecontinue={handlecontinue}></Declaration>
        </div>
    );
}

export default Gameboard;