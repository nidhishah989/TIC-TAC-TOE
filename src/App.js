import { useState } from 'react';
import './App.css';
import Home from './components/home.jsx';

function App() {

  const [GameStatus,Setgamestatus] = useState(false)
  const [GameMode,SetGameMode]=useState('')
  const [Players,setPlayers]=useState({player1:'',player1mark:'X',player2:'',player2mark:''})
  console.log(GameMode)
  console.log(Players)
  return (
    <div className="App d-flex align-items-center min-vh-100">
      
      {/* Game status check */} 
      {GameStatus? 
       (<div> 
        Game on
        <h1> Game MOde is: {GameMode}</h1>
        <h1>Player1 is {Players.player1}</h1>
        <h1>Player2 is {Players.player2}</h1>
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
