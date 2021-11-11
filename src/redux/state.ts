import { combineReducers, createStore } from "redux";
import { cardsReducer } from "./cardsReducer";

const reducers = combineReducers({
    cards: cardsReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);

//@ts-ignore
window.store = store;