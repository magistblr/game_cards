import { CardsActionTypes } from './actions';
import tomato from "../assets/tomato.jpg"
import cucumber from "../assets/cucumber.jpg"
import onion from "../assets/onion.jpg"
import carrot from "../assets/carrot.jpg"
import chilli from "../assets/chilli.jpg"
import potatoe from "../assets/potatoe.jpg"
import corn from "../assets/corn.jpg"
import pepper from "../assets/pepper.jpg"

export type cardType = {
    id: number
    img: string
    name: string
    matched: boolean
    open: boolean
    disabled: boolean
}

export type CardsType = cardType[]

export type initialStateType = {
    cards: CardsType
    openedCards: string[]
    rounds: number
}

const initialState: initialStateType = {
    cards: [
    {
        id: 1,
        img: tomato,
        name: "tomato",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 2,
        img: tomato,
        name: "tomato",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 3,
        img: cucumber,
        name: "cucumber",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 4,
        img: cucumber,
        name: "cucumber",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 5,
        img: onion,
        name: "onion",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 6,
        img: onion,
        name: "onion",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 7,
        img: potatoe,
        name: "potatoe",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 8,
        img: potatoe,
        name: "potatoe",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 9,
        img: pepper,
        name: "pepper",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 10,
        img: pepper,
        name: "pepper",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 11,
        img: chilli,
        name: "chilli",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 12,
        img: chilli,
        name: "chilli",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 13,
        img: corn,
        name: "corn",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 14,
        img: corn,
        name: "corn",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 15,
        img: carrot,
        name: "carrot",
        matched: false,
        open: false,
        disabled: false
    },
    {
        id: 16,
        img: carrot,
        name: "carrot",
        matched: false,
        open: false,
        disabled: false
    }
    ],
    openedCards: [],
    rounds: 1
};



export const cardsReducer = (state: initialStateType = initialState, action: CardsActionTypes): initialStateType => {
    switch (action.type) {
        case 'Card/NEW_ARRAY_CARDS':
            return {...state, cards: [...state.cards]}
        case 'Card/SET_OPENED_CARDS':
            return {...state, openedCards: [...state.openedCards, action.id, action.name]}
        case 'Card/SET_DEFAULT_OPENED_CARDS':
            return {...state, openedCards: []}
        case 'Card/SET_ROUNDS':
            return {...state, rounds: state.rounds + 1}
        case 'Card/SET_MATCHED':
            return {...state, cards: state.cards.map(card => card.name === action.name ? {...card, matched: true} : card)}
        case 'Card/SET_OPEN_CARDS':
            return {...state, cards: state.cards.map(card => card.id === action.id ? {...card, open: true} : card)}
        case 'Card/SET_CLOSE_CARDS':
            return {...state, cards: state.cards.map(card => card.name === action.name ? {...card, open: false} : card)}
        case 'Card/SET_RESTART':
            return {...state, cards: state.cards.map(card => card = {...card, matched: false, open: false}), openedCards: [], rounds: 1}
        case 'Card/SET_DISABLED_CARD':
            return {...state, cards: state.cards.map(card => card.id === action.id ? {...card, disabled: action.value} : card)}
        case 'Card/SET_ENABLED_ALL_CARD':
            return {...state, cards: state.cards.map( card => card = {...card, disabled: false})}
        case 'Card/SET_DISABLED_ALL_CARD':
            return {...state, cards: state.cards.map( card => card = {...card, disabled: true})}
        default:
            return state;
    }
};

