import { CardsType } from "./cardsReducer";

// export enum ACTIONS_TYPE {
//     CHANGE_CLICK_CARD = 'Card/CHANGE_CLICK_CARD',
//     NEW_ARRAY_CARDS = 'Card/NEW_ARRAY_CARDS',
// }


export const ChangeClickCard = (id: number, value: boolean) => ({ type: 'Card/CHANGE_CLICK_CARD', id, value} as const);
export const SetNewCards = (array: CardsType) => ({ type: 'Card/NEW_ARRAY_CARDS', array} as const);
export const SetOpenedCards = (id:string, name: string) => ({ type: 'Card/SET_OPENED_CARDS', id, name} as const);
export const SetRoundsCards = () => ({ type: 'Card/SET_ROUNDS'} as const);
export const SetMatchedCards = (name: string) => ({ type: 'Card/SET_MATCHED', name} as const);
export const SetDefaultOpenedCards = () => ({ type: 'Card/SET_DEFAULT_OPENED_CARDS'} as const);
export const SetOpenCards = (id: number) => ({ type: 'Card/SET_OPEN_CARDS', id} as const);
export const SetCloseCards = (name: string) => ({ type: 'Card/SET_CLOSE_CARDS', name} as const);

export type CardsActionTypes =
        | ReturnType<typeof ChangeClickCard>
        | ReturnType<typeof SetNewCards>
        | ReturnType<typeof SetOpenedCards>
        | ReturnType<typeof SetRoundsCards>
        | ReturnType<typeof SetMatchedCards>
        | ReturnType<typeof SetDefaultOpenedCards>
        | ReturnType<typeof SetOpenCards>
        | ReturnType<typeof SetCloseCards>