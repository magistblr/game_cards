import React, { useState } from 'react';

import s from './Card.module.css';

type CardType = {
    id: number
    img: string
    name: string
    open: boolean
    flipCard: (id:string, name: string) => void
};

export const Card = (props: CardType) => {


    console.log("render");

    const clickHandler = () => {
        //отправили колбэк с нужным имененем и уведомление об открытой карточке
        props.flipCard(String(props.id), props.name)
    }

    return (
        <div className={s.wrapper}>
            <div className={props.open ? s.card : s.card_qa} onClick={clickHandler}>
                <img  src={props.img} alt="card" />
            </div>
        </div>
    );
};

