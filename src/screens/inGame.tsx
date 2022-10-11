import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { PlayerScoreOverview, MemoryBoard, CustomButton } from '../components';
import { MemoryWinnerView } from '../components/memoryGame';
import useGameState from '../hooks/useGamestate';
import { RootStackParamList } from '../navigation/navigationArguments';


type InGameScreenProps = NativeStackScreenProps<RootStackParamList, 'InGame'>;

const InGameScreen:FC<InGameScreenProps> = ({ navigation, route }): JSX.Element => {
    const { gameState, handleCardItemPressed } = useGameState(route.params.nameOfPlayer1, route.params.nameOfPlayer2);
    

    const onCardItemPressed = (cardNumber: number): void => {
        handleCardItemPressed(cardNumber);
    };
    let gameContent: JSX.Element;

    if(gameState.isFinished) {
        const playerData = gameState.playerData;
        const winner = playerData.scorePlayer1 > playerData.scorePlayer2 ? playerData.nameOfPlayer1 : playerData.nameOfPlayer2;
        gameContent = (<MemoryWinnerView winner={winner}/>);
    } else {
        (gameContent = <MemoryBoard cards={gameState.cards} onCardItemPressed={(cardNumber) => onCardItemPressed(cardNumber)} />);
    }

    return (
        <View style={styles.container}>
            <PlayerScoreOverview 
                playerData={gameState.playerData}
            />
            {gameContent}
            <CustomButton title='Go Back' onPress={() => navigation.navigate('Main')} />
        </View>
    );
} 

export default InGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent:'space-between',
        padding: 10,     
    }
});