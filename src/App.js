import { useState } from 'react';
import './App.css';
import Home from './components/home.jsx';
import GameBoard from './components/gameboard.jsx';

function App() {

  const [GameStatus,Setgamestatus] = useState(false)
  const [GameMode,SetGameMode]=useState('')
  const [Players,setPlayers]=useState({player1:'',player1mark:'X',player2:'',player2mark:'O'})
  console.log("GAME MODE: ",GameMode)
  console.log("PLAYERS AND GAMESTATUS:",Players, GameStatus)
  return (
    <div className="App d-flex align-items-center min-vh-100">
      
      {/* Game status check */} 
      {GameStatus? 
       (<div className='container game'> 
        <GameBoard Setgamestatus= {Setgamestatus} Players={Players}></GameBoard>
        </div>) : 
       (<div className="container home-screen">
         <Home Setgamestatus= {Setgamestatus} SetGameMode={SetGameMode} Players={Players} setPlayers={setPlayers}/>
         
        </div>
        
        )
      }
    </div>
  );
}

export default App;
