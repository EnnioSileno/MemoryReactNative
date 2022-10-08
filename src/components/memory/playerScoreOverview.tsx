import React, { FC } from 'react';
import { View } from 'react-native';
import PlayerScore from './playerScore';

type Props = {
    nameOfPlayer1: string;
    nameOfPlayer2: string;
    isTurnPlayer1: boolean;
    playerScores: {
        scorePlayer1: number,
        scorePlayer2: number,
    }
}

const PlayerScoreOverview:FC<Props> = ({nameOfPlayer1, nameOfPlayer2, isTurnPlayer1, playerScores}): JSX.Element => {
    return (
        <View>
            <PlayerScore currentScore={playerScores.scorePlayer1} isPlayersTurn={isTurnPlayer1} playerName={nameOfPlayer1}/>
            <PlayerScore currentScore={playerScores.scorePlayer2} isPlayersTurn={!isTurnPlayer1} playerName={nameOfPlayer2}/>
        </View>
    )
}

export default PlayerScoreOverview;