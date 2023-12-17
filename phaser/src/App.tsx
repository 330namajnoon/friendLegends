import './App.css';
import { useEffect } from "react"
import game from './PhaserGame';
import { AUTO } from 'phaser';
import Game from './PhaserGame';
function App() {
  useEffect(() => {

    const config = {
      type: AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      scene: [Game],
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 400 },
          debug: false
        }
      }
    }

    const game = new Game(config);
    console.log(game)
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
