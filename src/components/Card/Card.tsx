import React from 'react';
import white from '../../assets/white.jpg';
import { cardType } from '../../redux/cardsReducer';
import s from './Card.module.css';

type CardType = {
  card: cardType;
  flipCard: (id: string, name: string) => void;
};

export const Card = (props: CardType) => {

  const clickHandler = () => {
    props.flipCard(String(props.card.id), props.card.name);
  };

  return (
    <div
      key={props.card.id}
      className={
        props.card.matched || props.card.disabled ? `${s.wrapper} ${s.disabled}` : s.wrapper
      }>
      <div className={props.card.open ? s.card : s.card_qa} onClick={clickHandler}>
        <img className={s.img} src={props.card.open ? props.card.img : white} alt="card" />
      </div>
    </div>
  );
};
