import GameEngine from "../GameEngine/GameEngine";

export default interface IAppState {
    gameEngine: GameEngine | null;
    isLoading: boolean;
}