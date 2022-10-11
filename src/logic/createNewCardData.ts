import { CardData } from "../components/interfaces";
import { dummyCardSequence, winViewTestCardSequence } from ".";

export const createNewCardData = (): CardData[] => {
    const cardNumberSequence: number[] = dummyCardSequence;
    console.log(cardNumberSequence);

    const initalCardData: CardData[] = new Array(cardNumberSequence.length);
    for(let i = 0; i < initalCardData.length; i++) {
        initalCardData[i] = {
            cardValue: cardNumberSequence[i],
            isTurnable: true,
            isRevealed: false,
        }
    }
    return initalCardData;
}