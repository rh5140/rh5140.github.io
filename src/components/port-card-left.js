import * as React from 'react';
import {
    card,
    cardImage,
    cardText,
    cardTitle
} from './info-card.module.css';

function PortCardLeft( props ) {
    return (
        <div className={card}>
            <div className={cardText}>
                <h2 className={cardTitle}>{props.title}</h2>
                {props.text}
            </div>
            <div className={cardImage}>
                <img src={props.image} alt={props.alt} className={cardImage}></img>
            </div>
        </div>
    )
}

export default PortCardLeft;