import { CardData } from "../components/interfaces";
import { dummyCardSequence, winViewTestCardSequence } from ".";
import emojis from "../resources/emojis";

export const createNewCardData = (): CardData[] => {
    const cardNumberSequence: number[] = dummyCardSequence;

    const initalCardData: CardData[] = new Array(cardNumberSequence.length);
    for(let i = 0; i < initalCardData.length; i++) {
        initalCardData[i] = {
            cardNumberValue: cardNumberSequence[i],
            cardValue: emojis.fruits[cardNumberSequence[i]][1],
            isTurnable: true,
            isRevealed: false,
        }
    }
    return initalCardData;
}