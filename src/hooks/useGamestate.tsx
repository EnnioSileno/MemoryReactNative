import { useState } from 'react';
import { CardData, GameState, PlayerData } from '../components/interfaces';


const useGameState = (nameOfPlayer1: string, nameOfPlayer2: string) => {
    const [gameState, setGameState] = useState<GameState>({
        cards: createNewCardData(),
        playerData: createNewPlayerData(nameOfPlayer1, nameOfPlayer2),
        revealedCardNumber: -1,
        moveCounter: 0,
    })

    const handleCardItemPressed = (cardNumber: number) => {
        console.log('pressed', cardNumber);
        const currentGameState: GameState = Object.assign({}, gameState);
        const currentCardStates: CardData[] = currentGameState.cards.slice();

        //reveal 1st Card
        if (gameState.moveCounter === 0 && !currentCardStates[cardNumber].isRevealed) {
            currentGameState.moveCounter++;
            currentGameState.revealedCardNumber = cardNumber;
            currentCardStates[cardNumber].isRevealed = true;
        }
        //reveal 2nd Card 
         else if (cardNumber !== currentGameState.revealedCardNumber && currentGameState.moveCounter === 1) {
            currentGameState.moveCounter++;
            currentCardStates[cardNumber].isRevealed = true;
        }

        //check if pair does match
        if (currentGameState.moveCounter === 2 && currentCardStates[currentGameState.revealedCardNumber].cardValue === currentCardStates[cardNumber].cardValue) {
            if(currentGameState.playerData.isTurnPlayer1) {
                currentGameState.playerData.scorePlayer1++;
            } else {
                currentGameState.playerData.scorePlayer2++;
            }
            currentCardStates[currentGameState.revealedCardNumber].isTurnable = false;
            currentCardStates[cardNumber].isTurnable = false;
            currentGameState.moveCounter = 0;
            currentGameState.revealedCardNumber = -1;
        }
        //reset after second move and no matches found
        else if (currentGameState.moveCounter === 2) {
            
                currentGameState.playerData.isTurnPlayer1 = !currentGameState.playerData.isTurnPlayer1;
                currentCardStates.forEach(card => card.isRevealed = false);
                currentGameState.moveCounter = 0;
                currentGameState.revealedCardNumber = -1;  
        }
        currentGameState.cards = currentCardStates;
        setGameState(currentGameState)
    };

    return {
        gameState: gameState,
        handleCardItemPressed,
    };
}

export default useGameState

function createNewCardData(): CardData[] {
    const dummyCardSequence: number[] = [
        12, 7, 2, 14, 10, 0, 7, 4, 9, 2, 5, 12, 14, 13, 1,
        4, 13, 8, 8, 3, 10, 6, 3, 11, 0, 6, 9, 11, 1, 5
    ];

    const initalCardData: CardData[] = new Array(30);
    for(let i = 0; i < initalCardData.length; i++) {
        initalCardData[i] = {
            cardValue: dummyCardSequence[i],
            isTurnable: true,
            isRevealed: false,
        }
    }
    return initalCardData;
}

function createNewPlayerData(nameOfPlayer1: string, nameOfPlayer2: string): PlayerData {
    return {
        isTurnPlayer1: true,
        nameOfPlayer1: nameOfPlayer1,
        nameOfPlayer2: nameOfPlayer2,
        scorePlayer1: 0,
        scorePlayer2: 0,
    }
}