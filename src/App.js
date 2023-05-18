import { useState } from 'react';
import './App.css';
import Home from './components/home.jsx';
import GameBoard from './components/gameboard.jsx';

function App() {

  const [GameStatus,Setgamestatus] = useState(false)
  const [GameMode,SetGameMode]=useState('')
  const [Players,setPlayers]=useState({player1:'',player1mark:'X',player1win:0,player2:'',player2mark:'O',player2win:0})
  return (
    <div className="App d-flex align-items-center min-vh-100">
      
      {/* Game status check */} 
      {GameStatus? 
       (<div className='container game'> 
        <GameBoard Setgamestatus= {Setgamestatus} Players={Players} GameMode={GameMode} setPlayers={setPlayers} SetGameMode={SetGameMode}></GameBoard>
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
