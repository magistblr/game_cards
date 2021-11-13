import React, { useState } from 'react';
import white from '../../assets/white.jpg'
import s from './Card.module.css';

type CardType = {
    id: number
    img: string
    name: string
    open: boolean
    matched: boolean
    flipCard: (id:string, name: string) => void
};

export const Card = React.memo( (props: CardType) => {

    const [openCard, setOpenCard] = useState(false)
    console.log("render");

    // useEffect(() => {
    //     setOpenCard(props.open)
    // }, [props.open])

    const clickHandler = () => {
                //отправили колбэк с нужным имененем и уведомление об открытой карточке
                setOpenCard(props.open)
                props.flipCard(String(props.id), props.name)
            }

    return (
        <div className={props.matched || props.open ? `${s.wrapper} ${s.disabled}` : s.wrapper} >
            <div className={props.open ? s.card : s.card_qa} onClick={clickHandler}>
                <img className={s.img} src={props.open ? props.img : white} alt="card" />
            </div>
        </div>
    );
});

