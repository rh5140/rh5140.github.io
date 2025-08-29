import * as React from 'react';
import {
    box,
    card,
    cardImage,
    cardText,
} from './game-info.module.css';

function InfoBox( props ) {
    return (
        <div>
            <div className={box}>
                {props.content}
            </div>
        </div>
    )
}

export default InfoBox;