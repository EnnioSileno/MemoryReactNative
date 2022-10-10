import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { GameState } from '../interfaces';
import CardItem from './cardItem';

type Props = {
    gameState: GameState;
    onCardItemPressed: (cardNumber: number) => void;
}

const MemoryBoard:FC<Props> = ({gameState, onCardItemPressed}): JSX.Element => {
    let cardItems: JSX.Element[] = [];
    for(let i = 0; i < 30; i++) {
        cardItems.push(<CardItem key={i} cardData={gameState.cards[i]} onCardItemPressed={() => onCardItemPressed(i)} ></CardItem>);
    }
    return (
        <View style={styles.boardContainer}>
            {cardItems}
        </View>
    )
}

export default MemoryBoard;

const styles = StyleSheet.create({
    boardContainer: {
        display: 'flex',
        alignItems:'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})