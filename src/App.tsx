import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { Card } from './components/Card/Card';
import { ChangeClickCard } from './redux/actions';
import { CardsStateType } from './redux/cardsReducer';
import { IGlobalState } from './redux/state';

export function App() {

  const dispatch = useDispatch()
  const cards = useSelector<IGlobalState, CardsStateType>(state => state.cards)

  const openCard = (id: number, value: boolean) => {
    dispatch(ChangeClickCard(id, value))
  }


  return (
    <div className={s.container}>
        <div className={s.cards}>
          {cards.map(card => <Card callback={openCard} id={card.id} img={card.img} click={card.click} key={card.id}></Card>)}
        </div>
    </div>
  );
}

