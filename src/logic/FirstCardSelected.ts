import { GameState, ICardSelectionState } from "../components/interfaces";
import { SecondCardSelected } from ".";
import { Dispatch, SetStateAction } from "react";

class FirstCardSelected implements ICardSelectionState {

    constructor() {
        console.log('New FirstCardSelected instantiated');
    }

    handle(gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>, cardNumber: number): void {
        console.log('**Handle FirstCardSelected**');

        gameState.cards[cardNumber].isRevealed = true;
        gameState.cardSelectionState = new SecondCardSelected(cardNumber);
        setGameState(gameState);
    };
}

export default FirstCardSelected;