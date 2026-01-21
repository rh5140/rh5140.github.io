import * as React from 'react';
import GameInfo from '../components/game-info';
import InfoBox from '../components/info-box';
import InfoCard from '../components/info-card';
import { thirdImage, tripleImage } from '../components/info-card.module.css';
import Layout from '../components/layout';
import QfdImage1 from '../images/qfd-1.png';
import QfdImage2 from '../images/qfd-2.png';
import QfdImage3 from '../images/qfd-3.png';
import QfdImage4 from '../images/qfd-4.png';
import QfdImage5 from '../images/qfd-5.png';
import QfdImage6 from '../images/qfd-6.png';

const QfdSummary = <span><b><i>Quest for Dendoro</i></b> is a 2.5D action-adventure RPG in which a hero must recover a magical amulet to save the village of Dendoro, developed at Northeastern University Oakland in collaboration with students from Mills College Children's School and San Francisco Conservatory of Music.</span>
const QfdLinks = <span><a href="https://raddishradish.itch.io/quest-for-dendoro" target="_blank"><button>Play on itch.io</button></a> <a href="https://github.com/rh5140/questForDendoro" target="_blank"><button>Code on GitHub</button></a></span>
const QfdContributions = <span><ul>
                              <li>Established experience goals and development timeline for MVP of 2.5D RPG developed with 5-person team</li>
                              <li>Facilitated weekly standups for sharing updates, identifying blockers, and re-evaluating priorities, tracking progress using team log document and Trello board</li>
                              <li>Implemented core gameplay systems such as movement, interaction, combat, and puzzles with C# in Unity</li>
                              <li>Conducted playtests with target audience (children aged 9-11) to identify issues, evaluate needs, and improve design, such as designing mobile-friendly UI after discovering users' unfamiliarity with keyboard-and-mouse</li>
                              </ul>
                    </span>
const QfdPlaytest = <span><h2>Playtests and Iterations</h2>
  <p>Before we even started making the game, we met with the 4th and 5th graders at MCCS to play games with them and better understand their wants and needs. Through observing them play and talk about their favorite board games and video games, we found that they tended...
    <ul>
      <li>to prefer consistent participation rather than waiting to take turns</li>
      <li>to prefer sidescrolling over third-person cameras for easier spatial judgment</li>
      <li>to be unfamiliar with keyboard controls, using either one finger or two overlapping hands for directional keys</li>
      <li>to love fantasy settings, with fantasy roleplay being a popular pasttime</li>
      <li>to dislike conventional narratives such as rescuing a damsel in distress</li>
    </ul>
    Based on their preferences, we decided to create an action-adventure RPG in a fantasy setting with a narrative twist with touchscreen controls, iterating following <b>playtests every two weeks</b>.
  </p>
  <p>
    <div className={tripleImage}>
      <div className={thirdImage}><img src={QfdImage1}></img></div>
      <div className={thirdImage}><img src={QfdImage2}></img></div>
      <div className={thirdImage}><img src={QfdImage3}></img></div>
    </div>
    <br></br>
    Selected learnings:
    <ul>
      <li><b>Problem discovered:</b> Some players struggled to understand where the colliders for 2D sprites in 3D space would be.</li>
      <li><b>Solution:</b> Increase hitbox size, decrease hurtbox size, and remove body collision damage, focusing on damage through telegraphed attacks.</li>
      <li><b>Problem discovered:</b> Players were confused about how long it took to defeat bosses, and bosses would sometimes die off screen.</li>
      <li><b>Solution:</b> Add boss healthbar to HUD so it is visible at all times, and add cutscene after boss is defeated.</li>  
    </ul>
    <div className={tripleImage}>
      <div className={thirdImage}><img src={QfdImage4}></img></div>
      <div className={thirdImage}><img src={QfdImage5}></img></div>
      <div className={thirdImage}><img src={QfdImage6}></img></div>
    </div>
  </p>
  </span>
const QfdPage = () => {
  return (
    <Layout pageTitle="Quest for Dendoro">
      <GameInfo summary={QfdSummary}
                role="producer, programmer, designer" 
                genre="2.5D action-adventure RPG" 
                platforms="WebGL, PC (intended for touchscreen)"
                tools="Unity, C#, GitHub" 
                size="5"
                duration="October 2025 - December 2025 (3 months)"
                status="Released December 2025"
                links={QfdLinks}
                video="https://www.youtube.com/embed/jQype5G9sb8?si=69e95Nh8sDvQ5tJY"
                roles="Producer, Programmer, & Designer"
                contributions={QfdContributions}>
      </GameInfo>
      <p></p>
      <InfoBox content={QfdPlaytest}></InfoBox>
    </Layout>
  )
}
export default QfdPage