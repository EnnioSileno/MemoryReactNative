import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameBoard, CustomButton, InGameHeader, CardItem } from '../components';
import { RootStackParamList } from '../navigation/navigationArguments';


type InGameScreenProps = NativeStackScreenProps<RootStackParamList, 'InGame'>;

export interface GameState {
    cards: CardData[],
    isTurnePlayerOne: boolean,
    revealedCardNumber: number,
    moveCounter: number,
}

const InGameScreen:FC<InGameScreenProps> = ({ navigation, route }): JSX.Element => {
    const [gameState, setGameState] = useState<GameState>({
        cards: initalCardData.slice(),
        isTurnePlayerOne: true,
        revealedCardNumber: -1,
        moveCounter: 0,
    })

    const handleCardItemPressed = (cardNumber: number): void => {
        console.log('pressed', cardNumber);
        const currentGameState: GameState = Object.assign({}, gameState);
        const currentCardStates: CardData[] = currentGameState.cards.slice();

        //reset after second move and no matches found
        if (currentGameState.moveCounter === 2) {
            currentCardStates.forEach(card => card.isRevealed = false);
            currentGameState.moveCounter = 0;
            currentGameState.revealedCardNumber = -1;
        }
    };

    return (
        <View style={styles.container}>
            <InGameHeader nameOfPlayer1={route.params.nameOfPlayer1} nameOfPlayer2={route.params.nameOfPlayer2}/>
            <GameBoard gameState={gameState} onCardItemPressed={(cardNumber) => handleCardItemPressed(cardNumber)} />
            <CustomButton title='Go Back' onPress={() => navigation.navigate('Main')} />
        </View>
    )
} 

export default InGameScreen;

const dummyCardSequence: number[] = [
    12, 7, 2, 14, 10, 0, 7, 4, 9, 2, 5, 12, 14, 13, 1,
    4, 13, 8, 8, 3, 10, 6, 3, 11, 0, 6, 9, 11, 1, 5
];

export interface CardData {
    cardValue: number,
    isTurnable: boolean,
    isRevealed: boolean, 
}

const initalCardData: CardData[] = new Array(30);
for(let i = 0; i < initalCardData.length; i++) {
    initalCardData[i] = {
        cardValue: dummyCardSequence[i],
        isTurnable: true,
        isRevealed: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent:'space-between',
        padding: 10,     
    }
})