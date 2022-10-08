import React, { FC } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableHighlight } from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import emojis from '../resources/emojis';
import { CardData } from '../screens/inGame';

interface Props {
    cardData: CardData;
    onCardItemPressed: () => void;
}

const CardItem:FC<Props> = ({ cardData, onCardItemPressed}): JSX.Element => {//{emojis.letters[cardData.cardNumber]}
    return (
        <TouchableHighlight style={cardData.isTurnable? styles.visible : styles.invisible} onPress={onCardItemPressed} >
            <View style={styles.cardItem}>
                <Text style={cardData.isRevealed? styles.visible : styles.invisible} >{cardData.cardValue}</Text>
            </View>
        </TouchableHighlight>
    )
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
})