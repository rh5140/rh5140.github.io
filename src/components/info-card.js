import * as React from 'react'
import {
            card,
            cardImage,
            cardText,
            cardTitle
                        } from './info-card.module.css'

// Maybe relevant: https://stackoverflow.com/questions/796087/make-a-div-into-a-link
function InfoCard( props ) {
    return (
        <div className={card}>
            <div className={cardImage}>
                <img src={props.image} alt="Ray Hsiao" className={cardImage}></img>
            </div>
            <div className={cardText}>
                <h2 className={cardTitle}>{props.title}</h2>
                {props.text}
            </div>
        </div>
    )
}

export default InfoCard;