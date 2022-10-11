
import { Dispatch } from "react";
import { CardData, ICardSelectionState, PlayerData } from ".";

interface GameState {
    cards: CardData[],
    playerData: PlayerData,
    cardSelectionState: ICardSelectionState,
    cardsInGame: number,
}

export default GameState;