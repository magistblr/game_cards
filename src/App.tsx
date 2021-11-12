import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { Card } from './components/Card/Card';
import { SetCloseCards, SetDefaultOpenedCards, SetMatchedCards, SetNewCards, SetOpenCards, SetOpenedCards } from './redux/actions';
import { CardsType } from './redux/cardsReducer';
import { IGlobalState } from './redux/state';


export function App() {

  const dispatch = useDispatch()
  const cards = useSelector<IGlobalState, CardsType>(state => state.cards.cards)
  const rounds = useSelector<IGlobalState, number>(state => state.cards.rounds)
  const openedCards = useSelector<IGlobalState, string[]>(state => state.cards.openedCards)


  //логика сортировки карточек
  const shuffle = (array: CardsType) => {
    let currentIndex = array.length,
        temporaryValue,
        randomIndex

    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }
  useEffect(() => {
    dispatch(SetNewCards(shuffle(cards)))
  }, [])


  //получили данные из колбэка
  const flipCard = (id:string, name: string) => {
      if(openedCards.length < 3){
        dispatch(SetOpenCards(Number(id)))
        dispatch(SetOpenedCards(id, name))
      } else {
        dispatch(SetDefaultOpenedCards())
      }
  }

  //работа с правильным/неправильным ответом
  useEffect(() => {
    if(openedCards.length === 4){
      if(openedCards[1] === openedCards[3]){
        dispatch(SetMatchedCards(openedCards[1]))
        dispatch(SetDefaultOpenedCards())
      }else setTimeout(() => {
        dispatch(SetCloseCards(openedCards[1]))
        dispatch(SetCloseCards(openedCards[3]))
        dispatch(SetDefaultOpenedCards())
      }, 1000);
    }
  }, [openedCards])



  return (
    <div className={s.container}>
        <div>Round: {rounds}</div>
        <div className={s.cards}>
          {cards.map((card) => <Card open={card.open} id={card.id} name={card.name} flipCard={flipCard} img={card.img} key={card.id}></Card>)}
        </div>
    </div>
  );
}

