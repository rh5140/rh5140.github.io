import * as React from 'react'
import {
            card,
            cardImage,
            cardText,
            cardTitle
                        } from './info-card.module.css'
import PFP from '../images/PFP.jpg'

function InfoCard(props) {
    return (
        <div className={card}>
            <div className={cardImage}>
                <img src={PFP} alt="Ray Hsiao" className={cardImage}></img>
                {/* (=^･ω･^=) */}
            </div>
            <div className={cardText}>
                <h2 className={cardTitle}>Hello!</h2>
                <p>I'm Ray Hsiao (any pronouns), a second year computer science student at <a href="https://ucla.edu/">UCLA</a>, 
      where I'm an officer for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>  and violist in the <a href="http://gmeatucla.com/">Game Music Ensemble</a>.</p>

                <p>
                    If you're seeing this version of my website, it's not yet complete :(
                </p>

                <p>
                    See relevant links below:
                </p>

                <div className="navbar">
                    <a href="https://www.linkedin.com/in/rayhsiao/"><button>
                        LinkedIn
                    </button></a>
                    <a href="https://www.github.com/rh5140/"><button>
                        GitHub
                    </button></a>
                    <a href="https://raddishradish.itch.io/"><button>
                        Gamedev
                    </button></a>
                    <a href="https://www.instagram.com/raddishradish/"><button>
                        Art
                    </button></a>
                </div>
            </div>
        </div>
    )
}

export default InfoCard;