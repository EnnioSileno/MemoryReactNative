import { CardData } from "../components/interfaces";
import { dummyCardSequence } from ".";

export const createNewCardData = (): CardData[] => {
    const cardNumberSequence: number[] = dummyCardSequence;

    const initalCardData: CardData[] = new Array(30);
    for(let i = 0; i < initalCardData.length; i++) {
        initalCardData[i] = {
            cardValue: cardNumberSequence[i],
            isTurnable: true,
            isRevealed: false,
        }
    }
    return initalCardData;
}