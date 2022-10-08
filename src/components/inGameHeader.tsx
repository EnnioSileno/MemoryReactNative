import React, { FC } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import PlayerScore from './playerScore';

interface Props {
    nameOfPlayer1: string;
    nameOfPlayer2: string;
}

const InGameHeader:FC<Props> = ({nameOfPlayer1, nameOfPlayer2}): JSX.Element => {
    return (
        <View>
            <PlayerScore currentScore='0' isPlayersTurn={true} playerName={nameOfPlayer1}/>
            <PlayerScore currentScore='1' isPlayersTurn={true} playerName={nameOfPlayer2}/>
        </View>
    )
}

export default InGameHeader;