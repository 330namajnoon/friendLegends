import "./App.css";
import React, { Component, ReactNode, createRef, RefObject } from "react";
import IAppState from "./Interfaces/IAppState";
import GAMEENGINE from "./GameEngine";
import Asset from "./GameEngine/Classes/Asset";
import ImageEntity from "./GameEngine/Classes/ImageEntity";
import Vector2 from "./GameEngine/Classes/Vector2";

import Sprite from "./GameEngine/Classes/Sprite";
import Vector6 from "./GameEngine/Classes/Vector6";
import Animation from "./GameEngine/Classes/Animation";

// function App() {
//   const [appState, setAppState] = useState<IAppState>({gameEngine: null, isLoading: true});
//   const canvas = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (canvas.current) {
//       const gameEngine = new GameEngine(canvas.current);
//       const newState:IAppState = {
//         gameEngine,
//         isLoading: false
//       }
//       setAppState(newState);
//       console.log(appState);
//     }
//   }, [canvas])

//   return (
//     <div className="App">
//       <canvas ref={canvas}></canvas>
//     </div>
//   );
// }

class App extends Component<{}, IAppState> {
  canvas: RefObject<HTMLCanvasElement> = createRef<HTMLCanvasElement>();
  constructor(props: {}) {
    super(props);
    this.state = {
      gameEngine: null,
      isLoading: true,
    };
  }

  componentDidMount(): void {
    const gamengine = new GAMEENGINE.Engine();
    const fondo1 = window.document.createElement("img");
    fondo1.src = "./assets/images/fondo1.jpg";
    const vaking = window.document.createElement("img");
    vaking.src = "./assets/images/vaking.png";
    document.body.appendChild(vaking)
    const renderer = () => {
      const backEntity = new ImageEntity(
        "back",
        new Vector2(window.innerWidth / 2, window.innerHeight / 2),
        0,
        new Vector2(window.innerWidth, window.innerHeight),
        "RIGHT",
        new GAMEENGINE.Animation(100, [
          new Sprite(fondo1, new Vector6(0, 0, 400, 200, window.innerWidth / 2, window.innerHeight / 2), 100),
        ])
      );
      gamengine.entitys.addNewEntity(backEntity);

      const vakingEntity = new ImageEntity(
        "vaking",
        new Vector2(100, 100),
        0,
        new Vector2(100, 100),
        "LEFT",
        new Animation(100, [
          new Sprite(vaking, new Vector6(64, 67, 100, 92, 50, 50), 100)
        ])
      );
      gamengine.entitys.addNewEntity(vakingEntity);
    };

    gamengine.assets.addNewAssets(
      [
        new Asset("fondo1", "image", fondo1),
        new Asset("vaking", "image", vaking)
      ],
      (err) => {
        if (!err) {
          renderer();
          gamengine.start();
        }
        console.log(gamengine.entitys);
      }
    );
  }

  render(): ReactNode {
    return <div className="App"></div>;
  }
}

export default App;
