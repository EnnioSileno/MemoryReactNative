import CardData from "./iCardData";
import PlayerData from "./iPlayerData";

interface GameState {
    cards: CardData[],
    playerData: PlayerData,
    revealedCardNumber: number,
    moveCounter: number,
}

export default GameState;