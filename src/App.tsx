import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { Card } from './components/Card/Card';
import {
  SetCloseCards,
  SetDefaultOpenedCards,
  SetDisabledAllCards,
  SetDisabledCards,
  SetEnabledAllCards,
  SetMatchedCards,
  SetNewCards,
  SetOpenCards,
  SetOpenedCards,
  SetRestartCards,
  SetRoundsCards,
} from './redux/actions';
import { CardsType } from './redux/cardsReducer';
import { IGlobalState } from './redux/state';
import { shuffle } from './utils/functionSort';

export const App = () => {
  const dispatch = useDispatch();
  const cards = useSelector<IGlobalState, CardsType>((state) => state.cards.cards);
  const rounds = useSelector<IGlobalState, number>((state) => state.cards.rounds);
  const openedCards = useSelector<IGlobalState, string[]>((state) => state.cards.openedCards);

  //sort cards
  useEffect(() => {
    dispatch(SetNewCards(shuffle(cards)));
  }, []);
  //sort cards


  //open card === true or false
  useEffect(() => {
    if (openedCards.length === 4) {
      dispatch(SetDisabledAllCards());
      if (openedCards[1] === openedCards[3]) {
        dispatch(SetDefaultOpenedCards());
        dispatch(SetRoundsCards());
        dispatch(SetMatchedCards(openedCards[1]));
        dispatch(SetMatchedCards(openedCards[3]));
        dispatch(SetEnabledAllCards());
      } else
        setTimeout(() => {
          dispatch(SetCloseCards(openedCards[1]));
          dispatch(SetCloseCards(openedCards[3]));
          dispatch(SetEnabledAllCards());
        }, 700);
    }
    dispatch(SetDefaultOpenedCards());
  }, [openedCards.length === 4]);


  //callback
  const flipCard = (identificate: string, name: string) => {
    const id = Number(identificate);

    if (openedCards.length < 3) {
      dispatch(SetOpenCards(Number(id)));
      dispatch(SetOpenedCards(identificate, name));
      dispatch(SetDisabledCards(id, true));
    } else {
      dispatch(SetDefaultOpenedCards());
    }
  };


  //restart button
  const restartHandler = () => {
    dispatch(SetNewCards(shuffle(cards)));
    dispatch(SetRestartCards());
  };

  return (
    <div className={s.container}>
      <div className={s.round}>Round: {rounds}</div>
      <div className={s.cards}>
        {cards.map((card) => (
          <Card card={card} flipCard={flipCard} key={card.id}></Card>
        ))}
      </div>
      <button className={s.restart} onClick={restartHandler}>
        RESTART
      </button>
    </div>
  );
};
