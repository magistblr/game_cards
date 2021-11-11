import React, { useCallback, useState } from 'react';

import s from './Card.module.css';

type CardType = {
    id: number
    img: string
    click: boolean
    callback: (id: number, value: boolean) => void
};

export const Card = (props: CardType) => {

    const [counter, setCounter] = useState(false)

    console.log("render");

    const clickHandler = (value: boolean) => {
        setCounter(value);
    }

    return (
        <>
            {counter
                ? <img className={s.card} src={props.img} alt="card" onClick={() => clickHandler(false)} />
                : <div className={s.card} onClick={() => clickHandler(true)}></div>
            }
        </>
    );
};

