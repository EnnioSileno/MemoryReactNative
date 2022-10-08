import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CustomButton } from '../components/basic';
import { CardData, GameState } from '../components/interfaces';
import { MemoryBoard, PlayerScoreOverview } from '../components/memory';
import { RootStackParamList } from '../navigation/navigationArguments';


type InGameScreenProps = NativeStackScreenProps<RootStackParamList, 'InGame'>;

const InGameScreen:FC<InGameScreenProps> = ({ navigation, route }): JSX.Element => {
    const [gameState, setGameState] = useState<GameState>({
        cards: createNewCardData(),
        isTurnPlayer1: true,
        revealedCardNumber: -1,
        moveCounter: 0,
        playerScores: {
            scorePlayer1: 0,
            scorePlayer2: 0,
        }
    })

    const handleCardItemPressed = (cardNumber: number): void => {
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
            if(currentGameState.isTurnPlayer1) {
                currentGameState.playerScores.scorePlayer1++;
            } else {
                currentGameState.playerScores.scorePlayer2++;
            }
            currentCardStates[currentGameState.revealedCardNumber].isTurnable = false;
            currentCardStates[cardNumber].isTurnable = false;
            currentGameState.moveCounter = 0;
            currentGameState.revealedCardNumber = -1;
        }
        //reset after second move and no matches found
        else if (currentGameState.moveCounter === 2) {
            
                currentGameState.isTurnPlayer1 = !currentGameState.isTurnPlayer1;
                currentCardStates.forEach(card => card.isRevealed = false);
                currentGameState.moveCounter = 0;
                currentGameState.revealedCardNumber = -1;  
        }
        currentGameState.cards = currentCardStates;
        setGameState(currentGameState)
    };

    return (
        <View style={styles.container}>
            <PlayerScoreOverview 
                nameOfPlayer1={route.params.nameOfPlayer1} 
                nameOfPlayer2={route.params.nameOfPlayer2}
                isTurnPlayer1={gameState.isTurnPlayer1}
                playerScores={gameState.playerScores}
            />
            <MemoryBoard gameState={gameState} onCardItemPressed={(cardNumber) => handleCardItemPressed(cardNumber)} />
            <CustomButton title='Go Back' onPress={() => navigation.navigate('Main')} />
        </View>
    )
} 

export default InGameScreen;

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent:'space-between',
        padding: 10,     
    }
})