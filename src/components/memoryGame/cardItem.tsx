import React, { FC, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Text, Animated, Pressable } from 'react-native';
import { CardData } from '../interfaces';

type Props = {
    cardData: CardData;
    onCardItemPressed: () => void;
}

const CardItem:FC<Props> = ({ cardData, onCardItemPressed}): JSX.Element => {
    
    const flipAnimation = useRef( new Animated.Value( 0 ) ).current;
    
    let flipRotation = 0;
    flipAnimation.addListener( ( { value } ) => flipRotation = value );
    const flipToFrontStyle = {
        transform: [
            { 
                rotateY: flipAnimation.interpolate( {
                inputRange: [ 0, 180 ],
                outputRange: [ "0deg", "180deg" ]
                })
            }]
    };
    const flipToBackStyle = {
        transform: [
            {
                rotateY: flipAnimation.interpolate( {
                inputRange: [ 0, 180 ],
                outputRange: [ "180deg", "360deg" ]
                })
            }]   
    };

    const flipToFront = () => {
        Animated.timing( flipAnimation, {
            toValue: 180,
            duration: 300,
            useNativeDriver: true,
            }
        ).start();
    };

    const flipToBack = () => {
        Animated.timing( flipAnimation, {
            toValue: 0,
            duration: 225,
            useNativeDriver: true,
            }
        ).start();
    };

    if(cardData.isRevealed) {
        flipToFront();
    } else {
        flipToBack()
    }

    return (
        <Pressable style={cardData.isTurnable ? styles.visible : styles.invisible} disabled={!cardData.isTurnable} onPress={onCardItemPressed} >
            <View>
                <Animated.View style={{...styles.cardItem, ...styles.cardFront, ...flipToBackStyle}}>
                    <Text>{cardData.cardValue}</Text>
                </Animated.View>
                <Animated.View style={{...styles.cardItem, ...styles.cardBack, ...flipToFrontStyle}} />
            </View>
        </Pressable>
    );
}

export default CardItem;

const styles = StyleSheet.create({
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 100,
    },
    cardItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width / 6,
        height: Dimensions.get('screen').width / 6,
        borderRadius: 4,
        margin: 4, 
    },
    cardFront: {
        backgroundColor: 'lightgrey',
        position: 'absolute',
        backfaceVisibility: 'hidden',
        elevation: 50,
    },
    cardBack: {
        backgroundColor: 'lightgrey',
        backfaceVisibility: 'hidden',
    },
});