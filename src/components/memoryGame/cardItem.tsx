import React, { FC } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight } from 'react-native';
import emojis from '../../resources/emojis';
import { CardData } from '../interfaces';

type Props = {
    cardData: CardData;
    onCardItemPressed: () => void;
}

const CardItem:FC<Props> = ({ cardData, onCardItemPressed}): JSX.Element => {
    return (
        <TouchableHighlight style={cardData.isTurnable? styles.visible : styles.invisible} onPress={onCardItemPressed} disabled={!cardData.isTurnable} >
            <View style={styles.cardItem}>
                <Text style={cardData.isRevealed? styles.visible : styles.invisible} >{emojis.fruits[cardData.cardValue][1]}</Text>
            </View>
        </TouchableHighlight>
    );
}

export default CardItem;

const styles = StyleSheet.create({
    cardItem: {
        backgroundColor: 'lightgrey',
        width: Dimensions.get('screen').width / 6,
        height: Dimensions.get('screen').width / 6,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
        borderRadius: 4,
    },
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 100,
    }
});