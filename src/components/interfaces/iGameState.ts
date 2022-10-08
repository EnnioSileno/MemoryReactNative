import CardData from "./iCardData";

interface GameState {
    cards: CardData[],
    isTurnPlayer1: boolean,
    revealedCardNumber: number,
    moveCounter: number,
    playerScores: {
        scorePlayer1: number,
        scorePlayer2: number,
    }
}

export default GameState;