import { GameState, ICardSelectionState } from "../components/interfaces";
import { Dispatch, SetStateAction } from "react";

class NoCardSelected implements ICardSelectionState {

    constructor() {
        console.log('New NoCardSelected instantiated');
    }

    handle(gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>, cardNumber: number): void {
        console.log('**Handle NoCardSelected**');
    };
}

export default NoCardSelected;