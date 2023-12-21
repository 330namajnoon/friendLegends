import "./App.css";
import { Component, ReactNode, createRef, RefObject } from "react";
import IAppState from "./Interfaces/IAppState";
import GAMEENGINE from "./GameEngine";
import JoseScene from "./Scenes/Jose.scene";
import SinaScene from "./Scenes/Sina.scene";

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
        // const renderer = () => {
        //   const backEntity = new GAMEENGINE.ImageEntity(
        //     "back",
        //     new GAMEENGINE.Vector2(window.innerWidth / 2, window.innerHeight / 2),
        //     0,
        //     new GAMEENGINE.Vector2(window.innerWidth, window.innerHeight),
        //     "LEFT",
        //     [
        //       new GAMEENGINE.Animation("parada", 100, [
        //         new GAMEENGINE.Sprite(fondo1, new GAMEENGINE.Vector6(0, 0, 400, 200, window.innerWidth / 2, window.innerHeight / 2), 100),
        //       ])
        //     ]
        //   );
        //   backEntity.scripts.setScripts([Suelo]);
        //   gamengine.entitys.append("imageEntity",backEntity);

        //   const vakingEntity = new GAMEENGINE.ImageEntity(
        //     "vaking",
        //     new GAMEENGINE.Vector2(100, 100),
        //     0,
        //     new GAMEENGINE.Vector2(100, 100),
        //     "RIGHT_BOTTOM",
        //     [
        //       new GAMEENGINE.Animation("caminar", 35, [
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(64, 67, 100, 92, 35, 50), 10),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(187, 67, 100, 92, 35, 50), 20),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(299, 67, 100, 92, 35, 50), 30),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(422, 67, 100, 92, 35, 50), 40),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(548, 67, 100, 92, 35, 50), 50),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(66, 203, 100, 92, 35, 50), 60),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(189, 203, 100, 92, 35, 50), 70),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(315, 203, 100, 92, 35, 50), 80),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(434, 203, 100, 92, 35, 50), 90),
        //         new GAMEENGINE.Sprite(vaking, new GAMEENGINE.Vector6(555, 203, 100, 92, 35, 50), 100),
        //       ])
        //     ]
        //   );
        //   vakingEntity.scripts.setScripts([ValkingMove])
        //   gamengine.entitys.append("imageEntity",vakingEntity);
        // };
        const gamengine = new GAMEENGINE.Engine();
        gamengine.start(
            [
                new GAMEENGINE.Asset("fondo1", "image", "./assets/images/fondo1.jpg"),
                new GAMEENGINE.Asset("vaking", "image", "./assets/images/vaking.png"),
                new GAMEENGINE.Asset("fondo2", "image", "./assets/images/fondo2.jpg"),
                new GAMEENGINE.Asset("jose_idle_0", "image", "./assets/images/jose/New Character_000.png"),
                new GAMEENGINE.Asset("jose_idle_1", "image", "./assets/images/jose/New Character_001.png"),
                new GAMEENGINE.Asset("jose_idle_2", "image", "./assets/images/jose/New Character_002.png"),
                new GAMEENGINE.Asset("jose_idle_3", "image", "./assets/images/jose/New Character_003.png"),
                new GAMEENGINE.Asset("jose_idle_4", "image", "./assets/images/jose/New Character_004.png"),
                new GAMEENGINE.Asset("jose_idle_5", "image", "./assets/images/jose/New Character_005.png"),
                new GAMEENGINE.Asset("jose_idle_6", "image", "./assets/images/jose/New Character_006.png"),
                new GAMEENGINE.Asset("jose_idle_7", "image", "./assets/images/jose/New Character_007.png"),
                new GAMEENGINE.Asset("jose_idle_8", "image", "./assets/images/jose/New Character_008.png"),
                new GAMEENGINE.Asset("jose_idle_9", "image", "./assets/images/jose/New Character_009.png"),
                new GAMEENGINE.Asset("jose_idle_10", "image", "./assets/images/jose/New Character_010.png"),
                new GAMEENGINE.Asset("jose_idle_11", "image", "./assets/images/jose/New Character_011.png"),
                new GAMEENGINE.Asset("jose_idle_12", "image", "./assets/images/jose/New Character_012.png"),
                new GAMEENGINE.Asset("jose_idle_13", "image", "./assets/images/jose/New Character_013.png"),
                new GAMEENGINE.Asset("jose_idle_14", "image", "./assets/images/jose/New Character_014.png"),
                new GAMEENGINE.Asset("jose_idle_15", "image", "./assets/images/jose/New Character_015.png"),
                new GAMEENGINE.Asset("jose_idle_16", "image", "./assets/images/jose/New Character_016.png"),
                new GAMEENGINE.Asset("jose_idle_17", "image", "./assets/images/jose/New Character_017.png"),
                new GAMEENGINE.Asset("jose_idle_18", "image", "./assets/images/jose/New Character_018.png"),
                new GAMEENGINE.Asset("jose_idle_19", "image", "./assets/images/jose/New Character_019.png"),

                new GAMEENGINE.Asset("jose_walk_0", "image", "./assets/images/jose/walk/New Character_000.png"),
                new GAMEENGINE.Asset("jose_walk_1", "image", "./assets/images/jose/walk/New Character_001.png"),
                new GAMEENGINE.Asset("jose_walk_2", "image", "./assets/images/jose/walk/New Character_002.png"),
                new GAMEENGINE.Asset("jose_walk_3", "image", "./assets/images/jose/walk/New Character_003.png"),
                new GAMEENGINE.Asset("jose_walk_4", "image", "./assets/images/jose/walk/New Character_004.png"),
                new GAMEENGINE.Asset("jose_walk_5", "image", "./assets/images/jose/walk/New Character_005.png"),
                new GAMEENGINE.Asset("jose_walk_6", "image", "./assets/images/jose/walk/New Character_006.png"),
                new GAMEENGINE.Asset("jose_walk_7", "image", "./assets/images/jose/walk/New Character_007.png"),
                new GAMEENGINE.Asset("jose_walk_8", "image", "./assets/images/jose/walk/New Character_008.png"),
                new GAMEENGINE.Asset("jose_walk_9", "image", "./assets/images/jose/walk/New Character_009.png"),

                new GAMEENGINE.Asset("jose_jump_0", "image", "./assets/images/jose/jump/New Character_000.png"),
                new GAMEENGINE.Asset("jose_jump_1", "image", "./assets/images/jose/jump/New Character_001.png"),
                new GAMEENGINE.Asset("jose_jump_2", "image", "./assets/images/jose/jump/New Character_002.png"),
                new GAMEENGINE.Asset("jose_jump_3", "image", "./assets/images/jose/jump/New Character_003.png"),
                new GAMEENGINE.Asset("jose_jump_4", "image", "./assets/images/jose/jump/New Character_004.png"),

                new GAMEENGINE.Asset("jose_attack1_0", "image", "./assets/images/jose/attack1/New Character_000.png"),
                new GAMEENGINE.Asset("jose_attack1_1", "image", "./assets/images/jose/attack1/New Character_001.png"),
                new GAMEENGINE.Asset("jose_attack1_2", "image", "./assets/images/jose/attack1/New Character_002.png"),
                new GAMEENGINE.Asset("jose_attack1_3", "image", "./assets/images/jose/attack1/New Character_003.png"),
            ],
            [
                {
                    name: "jose",
                    scene: JoseScene,
                },
                {
                  name: "sina",
                  scene: SinaScene,
                }
            ],
            (err: boolean) => {
                gamengine.scenes.render("sina");
                console.log(err);
            }
        );
    }

    render(): ReactNode {
        return <div className="App"></div>;
    }
}

export default App;
