import { useState } from 'react';
import { GameState } from '../components/interfaces';
import { createNewCardData, createNewPlayerData, FirstCardSelected } from '../logic';

const newCardData = () => createNewCardData()

const createNewGameState = (player1: string, player2: string): GameState => {
    const gameState = {
        cards: newCardData(),
        playerData: createNewPlayerData(player1, player2),
        cardSelectionState: new FirstCardSelected(),
        cardsInGame: 0,
        isFinished: false,
    };
    gameState.cardsInGame = gameState.cards.length;
    return gameState;
}

const useGameState = (player1: string, player2: string) => {
    const [gameState, setGameState] = useState<GameState>(createNewGameState(player1, player2));

    const handleCardItemPressed = (cardNumber: number) => {
        const currentGameState: GameState = Object.assign({}, gameState);
        currentGameState.cardSelectionState.handle(currentGameState, setGameState, cardNumber);
    };

    return {
        gameState: {
            playerData: Object.assign({}, gameState.playerData),
            cards:gameState.cards.slice(), 
            isFinished: gameState.isFinished,
        },
        handleCardItemPressed,
    };
}

export default useGameState;