import React, { FC } from 'react';
import { View } from 'react-native';
import { PlayerData } from '../interfaces';
import PlayerScore from './playerScore';

type Props = {
    playerData: PlayerData,
}

const PlayerScoreOverview:FC<Props> = ({ playerData }): JSX.Element => {
    return (
        <View>
            <PlayerScore currentScore={playerData.scorePlayer1} isPlayersTurn={playerData.isTurnPlayer1} playerName={playerData.nameOfPlayer1}/>
            <PlayerScore currentScore={playerData.scorePlayer2} isPlayersTurn={!playerData.isTurnPlayer1} playerName={playerData.nameOfPlayer2}/>
        </View>
    );
}

export default PlayerScoreOverview;