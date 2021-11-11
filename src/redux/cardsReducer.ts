import { CardsActionTypes } from './actions';
import tomato from "../assets/tomato.jpg"
import cucumber from "../assets/cucumber.jpg"

export type cardType = {
    id: number
    img: string
    click: boolean
    name: string
}

export type CardsStateType = cardType[]

const initialState: CardsStateType = [
    {
        id: 1,
        img: tomato,
        click: true,
        name: "tomato"
    },
    {
        id: 2,
        img: tomato,
        click: true,
        name: "tomato"
    },
    {
        id: 3,
        img: cucumber,
        click: false,
        name: "cucumber"
    },
    {
        id: 4,
        img: cucumber,
        click: false,
        name: "cucumber"
    },
];



export const cardsReducer = (state: CardsStateType = initialState, action: CardsActionTypes): CardsStateType => {
    switch (action.type) {
        case 'Card/CHANGE_CLICK_CARD':
            return state.map(card => card.id === action.id ? {...card, click: action.value} : card)
        default:
            return state;
    }
};

