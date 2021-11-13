import React, { useCallback, useState } from 'react';
import white from '../../assets/white.jpg'
import { cardType } from '../../redux/cardsReducer';
import s from './Card.module.css';

type CardType = {
    card: cardType
    flipCard: (id:string, name: string) => void
};

export const Card = React.memo( (props: CardType) => {

    // const [openCard, setOpenCard] = useState(false)
    console.log("render");

    // useEffect(() => {
    //     setOpenCard(props.open)
    // }, [props.open])


    const clickHandler = useCallback( () => {
                //отправили колбэк с нужным имененем и уведомление об открытой карточке
                props.flipCard(String(props.card.id), props.card.name)
            },[props.flipCard])

    return (
        <div key={props.card.id} className={props.card.matched || props.card.disabled ? `${s.wrapper} ${s.disabled}` : s.wrapper} >
            <div className={props.card.open ? s.card : s.card_qa} onClick={clickHandler}>
                <img className={s.img} src={props.card.open ? props.card.img : white} alt="card" />
            </div>
        </div>
    );
});

