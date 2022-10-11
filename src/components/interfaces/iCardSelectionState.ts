import { Dispatch, SetStateAction } from "react";
import { CardData, GameState } from ".";

type ICardSelectionState = {
    handle: (gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>, cardNumber: number) => void;
}

export default ICardSelectionState;