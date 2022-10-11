import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { PlayerScoreOverview, MemoryBoard, CustomButton } from '../components';
import useGameState from '../hooks/useGamestate';
import { RootStackParamList } from '../navigation/navigationArguments';


type InGameScreenProps = NativeStackScreenProps<RootStackParamList, 'InGame'>;

const InGameScreen:FC<InGameScreenProps> = ({ navigation, route }): JSX.Element => {
    const { gameState, handleCardItemPressed } = useGameState(route.params.nameOfPlayer1, route.params.nameOfPlayer2);
    
    const effect = useEffect(() => {
        console.log('screen re-rendered');
    });

    const onCardItemPressed = (cardNumber: number): void => {
        handleCardItemPressed(cardNumber);
    };

    return (
        <View style={styles.container}>
            <PlayerScoreOverview 
                playerData={gameState.playerData}
            />
            <MemoryBoard cards={gameState.cards} onCardItemPressed={(cardNumber) => onCardItemPressed(cardNumber)} />
            <CustomButton title='Go Back' onPress={() => navigation.navigate('Main')} />
        </View>
    )
} 

export default InGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent:'space-between',
        padding: 10,     
    }
})