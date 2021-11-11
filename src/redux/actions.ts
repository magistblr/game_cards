export enum ACTIONS_TYPE {
    CHANGE_CLICK_CARD = 'Card/CHANGE_CLICK_CARD',
}


export const ChangeClickCard = (id: number, value: boolean) => ({ type: 'Card/CHANGE_CLICK_CARD', id, value} as const);

export type CardsActionTypes =
        | ReturnType<typeof ChangeClickCard>
