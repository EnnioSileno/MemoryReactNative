import { PlayerData } from "../components/interfaces";

export const createNewPlayerData = (nameOfPlayer1: string, nameOfPlayer2: string): PlayerData => {
    return {
        isTurnPlayer1: true,
        nameOfPlayer1: nameOfPlayer1,
        nameOfPlayer2: nameOfPlayer2,
        scorePlayer1: 0,
        scorePlayer2: 0,
    }
}