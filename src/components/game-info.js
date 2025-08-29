import * as React from 'react';
import {
    box,
    card,
    cardImage,
    cardText,
} from './game-info.module.css';

function GameInfo( props ) {
    return (
        <div>
            <div className={card}>
                <div className={cardText}>
                    <p>{props.summary}
                        <p><b>Project Details</b></p>
                        <ul>
                            <li><b>Genre:</b> {props.genre}</li>
                            <li><b>Platforms:</b> {props.platforms}</li>
                            <li><b>Engine and tools:</b> {props.tools}</li>
                            <li><b>Team size:</b> {props.size}</li>
                            <li><b>Duration:</b> {props.duration}</li>
                            <li><b>Status:</b> {props.status}</li>
                        </ul>
                        {props.links}
                    </p>
                </div>
                <div className={cardImage}>
                    <iframe width="560" height="400" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div><p></p>
            <div className={box}>
                <h3>As {props.roles}, I...</h3>
                <p>{props.contributions}</p>
            </div>
        </div>
    )
}

export default GameInfo;