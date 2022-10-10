import './App.css';
import Header from "./components/Header"
import Player from "./components/Player"
import Board from "./components/Board"

function App() {
  let turnCount = 0
  
  const boardClick = () => {
      turnCount += 1
      console.log(turnCount)
    
  }


  return (
    <div className="App">
      <Header />
      <div className="playerCards">
        <Player whichPlayer='X' />
        <Player whichPlayer='O' />
      </div>
      <Board turnCount={boardClick} />
    </div>
  );
}

export default App;
