import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { GameState } from '../screens/inGame';
import CardItem from './cardItem';

interface Props {
    gameState: GameState;
    onCardItemPressed: (cardNumber: number) => void;
}

const GameBoard:FC<Props> = ({gameState, onCardItemPressed}): JSX.Element => {
    let cardItems: JSX.Element[] = [];
    for(let i = 0; i < 30; i++) {
        cardItems.push(<CardItem cardData={gameState.cards[i]} onCardItemPressed={() => onCardItemPressed(i)} ></CardItem>);
    }
    return (
        <View style={styles.boardContainer}>
            {cardItems}
        </View>
    )
}

export default GameBoard;

const styles = StyleSheet.create({
    boardContainer: {
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})