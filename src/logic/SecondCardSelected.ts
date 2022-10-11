import { GameState, ICardSelectionState } from "../components/interfaces";
import { FirstCardSelected } from ".";
import { Dispatch, SetStateAction } from "react";
import NoCardSelected from "./NoCardSelected";

class SecondCardSelected implements ICardSelectionState {
    #firstSelectedCard: number;
    
    constructor(cardNumber: number) {
        console.log('New SecondCardSelected instantiated');
        this.#firstSelectedCard = cardNumber;
    }

    handle(gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>, cardNumber: number): void {
        console.log('**Handle SecondCardSelected**');
        const areTheSameCards: boolean = this.#firstSelectedCard === cardNumber;

        if(areTheSameCards) {
            this.#hideFirstCard(Object.assign({}, gameState), setGameState);
        } else {
            this.#flipSecondCard(Object.assign({}, gameState), setGameState, cardNumber);
            setTimeout(() => {
                this.#calculateNewPossibleScore(Object.assign({}, gameState), setGameState, cardNumber);
            }, 500);
        }

    }

    #hideFirstCard = (gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>): void => {
        gameState.cards[this.#firstSelectedCard].isRevealed = false;
        gameState.cardSelectionState = new FirstCardSelected();
        setGameState(gameState);
    }

    #flipSecondCard = (gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>, secondCardNumber: number): void => {
        gameState.cards[secondCardNumber].isRevealed = true;
        gameState.cardSelectionState = new NoCardSelected();
        setGameState(gameState);
    }  
    
    #calculateNewPossibleScore = (gameState: GameState, setGameState: Dispatch<SetStateAction<GameState>>, secondCardNumber: number): void => {
        if(this.#cardsHaveTheSameValue(gameState, this.#firstSelectedCard, secondCardNumber)) {
            this.#addOneToThePlayerScore(gameState)
            this.#removeCardsFromBoard(gameState, secondCardNumber);
        } else {
            this.#changePlayer(gameState);
        }
        gameState.cards[this.#firstSelectedCard].isRevealed = false;
        gameState.cards[secondCardNumber].isRevealed = false;
        gameState.cardSelectionState = new FirstCardSelected();
        setGameState(gameState);
    }

    #cardsHaveTheSameValue = (gameState: GameState, firstCard: number, secondCard: number): boolean => {
        return gameState.cards[firstCard].cardValue === gameState.cards[secondCard].cardValue;
    }

    #addOneToThePlayerScore = (gameState: GameState): void => {
        if(gameState.playerData.isTurnPlayer1) {
            gameState.playerData.scorePlayer1++;
        } else {
            gameState.playerData.scorePlayer2++;
        }
    }

    #changePlayer = (gameState: GameState): void => {
        gameState.playerData.isTurnPlayer1 = !gameState.playerData.isTurnPlayer1;
    }

    #removeCardsFromBoard = (gameState: GameState, secondCard: number): void => {
        gameState.cards[this.#firstSelectedCard].isTurnable = false;
        gameState.cards[secondCard].isTurnable = false;
        gameState.cardsInGame -= 2;
        gameState.isFinished = gameState.cardsInGame === 0;
    }
}

export default SecondCardSelected;