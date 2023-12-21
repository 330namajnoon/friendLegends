import "./App.css";
import React, { Component, ReactNode, createRef, RefObject } from "react";
import IAppState from "./Interfaces/IAppState";
import GAMEENGINE from "./GameEngine";
import ValkingMove from "./Scripts/ValkingMove";
import Suelo from "./Scripts/Suelo";
import JoseScene from "./Scripts/Jose.scene";

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

  componentDidMount(): void {
    
    const renderer = () => {
      const backEntity = new GAMEENGINE.ImageEntity(
        "back",
        new GAMEENGINE.Vector2(window.innerWidth / 2, window.innerHeight / 2),
        0,
        new GAMEENGINE.Vector2(window.innerWidth, window.innerHeight),
        "LEFT",
        [
          new GAMEENGINE.Animation("parada", 100, [
            new GAMEENGINE.Sprite(fondo1, new GAMEENGINE.Vector6(0, 0, 400, 200, window.innerWidth / 2, window.innerHeight / 2), 100),
          ])
        ]
      );
      backEntity.scripts.setScripts([Suelo]);
      gamengine.entitys.append("imageEntity",backEntity);

      const vakingEntity = new GAMEENGINE.ImageEntity(
        "vaking",
        new GAMEENGINE.Vector2(100, 100),
        0,
        new GAMEENGINE.Vector2(100, 100),
        "RIGHT_BOTTOM",
        [
          new GAMEENGINE.Animation("caminar", 35, [
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(64, 67, 100, 92, 35, 50), 10),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(187, 67, 100, 92, 35, 50), 20),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(299, 67, 100, 92, 35, 50), 30),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(422, 67, 100, 92, 35, 50), 40),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(548, 67, 100, 92, 35, 50), 50),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(66, 203, 100, 92, 35, 50), 60),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(189, 203, 100, 92, 35, 50), 70),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(315, 203, 100, 92, 35, 50), 80),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(434, 203, 100, 92, 35, 50), 90),
            new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(555, 203, 100, 92, 35, 50), 100),
          ])
        ]
      );
      vakingEntity.scripts.setScripts([ValkingMove])
      gamengine.entitys.append("imageEntity",vakingEntity);
    };
    const gamengine = new GAMEENGINE.Engine();
    const fondo1 = window.document.createElement("img");
    fondo1.src = "./assets/images/fondo1.jpg";
    const vaking = window.document.createElement("img");
    vaking.src = "./assets/images/vaking.png";
    
    const jose_idle_0 = window.document.createElement("img");
    jose_idle_0.src = "./assets/images/jose/New Character_000.png";
    const jose_idle_1 = window.document.createElement("img");
    jose_idle_1.src = "./assets/images/jose/New Character_001.png";
    const jose_idle_2 = window.document.createElement("img");
    jose_idle_2.src = "./assets/images/jose/New Character_002.png";
    const jose_idle_3 = window.document.createElement("img");
    jose_idle_3.src = "./assets/images/jose/New Character_003.png";
    const jose_idle_4 = window.document.createElement("img");
    jose_idle_4.src = "./assets/images/jose/New Character_004.png";
    const jose_idle_5 = window.document.createElement("img");
    jose_idle_5.src = "./assets/images/jose/New Character_005.png";
    const jose_idle_6 = window.document.createElement("img");
    jose_idle_6.src = "./assets/images/jose/New Character_006.png";
    const jose_idle_7 = window.document.createElement("img");
    jose_idle_7.src = "./assets/images/jose/New Character_007.png";
    const jose_idle_8 = window.document.createElement("img");
    jose_idle_8.src = "./assets/images/jose/New Character_008.png";
    const jose_idle_9 = window.document.createElement("img");
    jose_idle_9.src = "./assets/images/jose/New Character_009.png";
    const jose_idle_10 = window.document.createElement("img");
    jose_idle_10.src = "./assets/images/jose/New Character_010.png";
    const jose_idle_11 = window.document.createElement("img");
    jose_idle_11.src = "./assets/images/jose/New Character_011.png";
    const jose_idle_12 = window.document.createElement("img");
    jose_idle_12.src = "./assets/images/jose/New Character_012.png";
    const jose_idle_13 = window.document.createElement("img");
    jose_idle_13.src = "./assets/images/jose/New Character_013.png";
    const jose_idle_14 = window.document.createElement("img");
    jose_idle_14.src = "./assets/images/jose/New Character_014.png";
    const jose_idle_15 = window.document.createElement("img");
    jose_idle_15.src = "./assets/images/jose/New Character_015.png";
    const jose_idle_16 = window.document.createElement("img");
    jose_idle_16.src = "./assets/images/jose/New Character_016.png";
    const jose_idle_17 = window.document.createElement("img");
    jose_idle_17.src = "./assets/images/jose/New Character_017.png";
    const jose_idle_18 = window.document.createElement("img");
    jose_idle_18.src = "./assets/images/jose/New Character_018.png";
    const jose_idle_19 = window.document.createElement("img");
    jose_idle_19.src = "./assets/images/jose/New Character_019.png";
    
    
    const jose_walk_0 = window.document.createElement("img");
    jose_walk_0.src = "./assets/images/jose/walk/New Character_000.png";
    const jose_walk_1 = window.document.createElement("img");
    jose_walk_1.src = "./assets/images/jose/walk/New Character_001.png";
    const jose_walk_2 = window.document.createElement("img");
    jose_walk_2.src = "./assets/images/jose/walk/New Character_002.png";
    const jose_walk_3 = window.document.createElement("img");
    jose_walk_3.src = "./assets/images/jose/walk/New Character_003.png";
    const jose_walk_4 = window.document.createElement("img");
    jose_walk_4.src = "./assets/images/jose/walk/New Character_004.png";
    const jose_walk_5 = window.document.createElement("img");
    jose_walk_5.src = "./assets/images/jose/walk/New Character_005.png";
    const jose_walk_6 = window.document.createElement("img");
    jose_walk_6.src = "./assets/images/jose/walk/New Character_006.png";
    const jose_walk_7 = window.document.createElement("img");
    jose_walk_7.src = "./assets/images/jose/walk/New Character_007.png";
    const jose_walk_8 = window.document.createElement("img");
    jose_walk_8.src = "./assets/images/jose/walk/New Character_008.png";
    const jose_walk_9 = window.document.createElement("img");
    jose_walk_9.src = "./assets/images/jose/walk/New Character_009.png";
  
    const jose_jump_0 = window.document.createElement("img");
    jose_jump_0.src = "./assets/images/jose/jump/New Character_000.png";
    const jose_jump_1 = window.document.createElement("img");
    jose_jump_1.src = "./assets/images/jose/jump/New Character_001.png";
    const jose_jump_2 = window.document.createElement("img");
    jose_jump_2.src = "./assets/images/jose/jump/New Character_002.png";
    const jose_jump_3 = window.document.createElement("img");
    jose_jump_3.src = "./assets/images/jose/jump/New Character_003.png";
    const jose_jump_4 = window.document.createElement("img");
    jose_jump_4.src = "./assets/images/jose/jump/New Character_004.png";

    const jose_attack1_0 = window.document.createElement("img");
    jose_attack1_0.src = "./assets/images/jose/attack1/New Character_000.png";
    const jose_attack1_1 = window.document.createElement("img");
    jose_attack1_1.src = "./assets/images/jose/attack1/New Character_001.png";
    const jose_attack1_2 = window.document.createElement("img");
    jose_attack1_2.src = "./assets/images/jose/attack1/New Character_002.png";
    const jose_attack1_3 = window.document.createElement("img");
    jose_attack1_3.src = "./assets/images/jose/attack1/New Character_003.png";

    gamengine.assets.addNewAssets(
      [
        new GAMEENGINE.Asset("fondo1", "image", fondo1),
        new GAMEENGINE.Asset("vaking", "image", vaking),
        new GAMEENGINE.Asset("jose_idle_0", "image", jose_idle_0),
        new GAMEENGINE.Asset("jose_idle_1", "image", jose_idle_1),
        new GAMEENGINE.Asset("jose_idle_2", "image", jose_idle_2),
        new GAMEENGINE.Asset("jose_idle_3", "image", jose_idle_3),
        new GAMEENGINE.Asset("jose_idle_4", "image", jose_idle_4),
        new GAMEENGINE.Asset("jose_idle_5", "image", jose_idle_5),
        new GAMEENGINE.Asset("jose_idle_6", "image", jose_idle_6),
        new GAMEENGINE.Asset("jose_idle_7", "image", jose_idle_7),
        new GAMEENGINE.Asset("jose_idle_8", "image", jose_idle_8),
        new GAMEENGINE.Asset("jose_idle_9", "image", jose_idle_9),
        new GAMEENGINE.Asset("jose_idle_10", "image", jose_idle_10),
        new GAMEENGINE.Asset("jose_idle_11", "image", jose_idle_11),
        new GAMEENGINE.Asset("jose_idle_12", "image", jose_idle_12),
        new GAMEENGINE.Asset("jose_idle_13", "image", jose_idle_13),
        new GAMEENGINE.Asset("jose_idle_14", "image", jose_idle_14),
        new GAMEENGINE.Asset("jose_idle_15", "image", jose_idle_15),
        new GAMEENGINE.Asset("jose_idle_16", "image", jose_idle_16),
        new GAMEENGINE.Asset("jose_idle_17", "image", jose_idle_17),
        new GAMEENGINE.Asset("jose_idle_18", "image", jose_idle_18),
        new GAMEENGINE.Asset("jose_idle_19", "image", jose_idle_19),

        new GAMEENGINE.Asset("jose_walk_0", "image", jose_walk_0),
        new GAMEENGINE.Asset("jose_walk_1", "image", jose_walk_1),
        new GAMEENGINE.Asset("jose_walk_2", "image", jose_walk_2),
        new GAMEENGINE.Asset("jose_walk_3", "image", jose_walk_3),
        new GAMEENGINE.Asset("jose_walk_4", "image", jose_walk_4),
        new GAMEENGINE.Asset("jose_walk_5", "image", jose_walk_5),
        new GAMEENGINE.Asset("jose_walk_6", "image", jose_walk_6),
        new GAMEENGINE.Asset("jose_walk_7", "image", jose_walk_7),
        new GAMEENGINE.Asset("jose_walk_8", "image", jose_walk_8),
        new GAMEENGINE.Asset("jose_walk_9", "image", jose_walk_9),

        new GAMEENGINE.Asset("jose_jump_0", "image", jose_jump_0),
        new GAMEENGINE.Asset("jose_jump_1", "image", jose_jump_1),
        new GAMEENGINE.Asset("jose_jump_2", "image", jose_jump_2),
        new GAMEENGINE.Asset("jose_jump_3", "image", jose_jump_3),
        new GAMEENGINE.Asset("jose_jump_4", "image", jose_jump_4),

        new GAMEENGINE.Asset("jose_attack1_0", "image", jose_attack1_0),
        new GAMEENGINE.Asset("jose_attack1_1", "image", jose_attack1_1),
        new GAMEENGINE.Asset("jose_attack1_2", "image", jose_attack1_2),
        new GAMEENGINE.Asset("jose_attack1_3", "image", jose_attack1_3),
      ],
      (err) => {
        if (!err) {
          gamengine.scenes.append("jose",JoseScene);
          gamengine.scenes.render("jose");
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
