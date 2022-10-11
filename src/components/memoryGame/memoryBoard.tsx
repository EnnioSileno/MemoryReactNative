import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { CardData } from '../interfaces';
import CardItem from './cardItem';

type Props = {
    cards: CardData[];
    onCardItemPressed: (cardNumber: number) => void;
}

const MemoryBoard:FC<Props> = ({cards, onCardItemPressed}): JSX.Element => {
    let cardItems: JSX.Element[] = [];
    for(let i = 0; i < 30; i++) {
        cardItems.push(<CardItem key={i} cardData={cards[i]} onCardItemPressed={() => onCardItemPressed(i)} ></CardItem>);
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