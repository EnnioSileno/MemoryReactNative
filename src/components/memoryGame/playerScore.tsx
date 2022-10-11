import React, { FC } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

type Props = {
    playerName: string;
    currentScore: number;
    isPlayersTurn: boolean;
}

const PlayerScore:FC<Props> = ({playerName, currentScore, isPlayersTurn}): JSX.Element => {  
    return (
        <View style={styles.container}>
            <Text style={styles.playersTurn} >{isPlayersTurn? '\u27A9' : ''}</Text>
            <Text style={styles.playersName} >{playerName}: </Text>
            <Text>{currentScore}</Text>
        </View>
    );
}

export default PlayerScore;

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    playersTurn: {
        width: Dimensions.get('screen').width / 16
    },
    playersName: {
        width: '25%'
    }
});