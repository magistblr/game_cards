import { CardsType } from "./cardsReducer";


export const SetNewCards = (array: CardsType) => ({ type: 'Card/NEW_ARRAY_CARDS', array} as const);
export const SetOpenedCards = (id:string, name: string) => ({ type: 'Card/SET_OPENED_CARDS', id, name} as const);
export const SetRoundsCards = () => ({ type: 'Card/SET_ROUNDS'} as const);
export const SetMatchedCards = (name: string) => ({ type: 'Card/SET_MATCHED', name} as const);
export const SetDefaultOpenedCards = () => ({ type: 'Card/SET_DEFAULT_OPENED_CARDS'} as const);
export const SetOpenCards = (id: number) => ({ type: 'Card/SET_OPEN_CARDS', id} as const);
export const SetCloseCards = (name: string) => ({ type: 'Card/SET_CLOSE_CARDS', name} as const);
export const SetRestartCards = () => ({ type: 'Card/SET_RESTART'} as const);
export const SetDisabledCards = (id: number, value: boolean) => ({ type: 'Card/SET_DISABLED_CARD', id, value} as const);
export const SetEnabledAllCards = () => ({ type: 'Card/SET_ENABLED_ALL_CARD'} as const);
export const SetDisabledAllCards = () => ({ type: 'Card/SET_DISABLED_ALL_CARD'} as const);

export type CardsActionTypes =
        | ReturnType<typeof SetNewCards>
        | ReturnType<typeof SetOpenedCards>
        | ReturnType<typeof SetRoundsCards>
        | ReturnType<typeof SetMatchedCards>
        | ReturnType<typeof SetDefaultOpenedCards>
        | ReturnType<typeof SetOpenCards>
        | ReturnType<typeof SetCloseCards>
        | ReturnType<typeof SetRestartCards>
        | ReturnType<typeof SetDisabledCards>
        | ReturnType<typeof SetDisabledAllCards>
        | ReturnType<typeof SetEnabledAllCards>
