import * as React from 'react';
import GameInfo from '../components/game-info';
import InfoBox from '../components/info-box';
import InfoCard from '../components/info-card';
import { thirdImage, tripleImage } from '../components/info-card.module.css';
import Layout from '../components/layout';

const QfdSummary = <span><b><i>Quest for Dendoro</i></b> is a 2.5D action-adventure RPG in which a hero must recover a magical amulet to save the village of Dendoro, developed at Northeastern University Oakland in collaboration with students from Mills College Children's School and San Francisco Conservatory of Music.</span>
const QfdLinks = <span><a href="https://raddishradish.itch.io/quest-for-dendoro" target="_blank"><button>Play on itch.io</button></a> <a href="https://github.com/rh5140/questForDendoro" target="_blank"><button>Code on GitHub</button></a></span>
const QfdContributions = <span><ul>
                              <li>Established experience goals and development timeline for MVP of 2.5D RPG developed with 5-person team</li>
                              <li>Facilitated weekly standups for sharing updates, identifying blockers, and re-evaluating priorities, tracking progress using team log document and Trello board</li>
                              <li>Implemented core gameplay systems such as movement, interaction, combat, and puzzles with C# in Unity</li>
                              <li>Conducted playtests with target audience (children aged 9-11) to identify issues, evaluate needs, and improve design, such as designing mobile-friendly UI after discovering users' unfamiliarity with keyboard-and-mouse</li>
                              </ul>
                    </span>
const QfdPlaytest = <span><h2>Playtests</h2>
  <p>Conversion of playtest learnings notes to website-ready formatting in progress~</p>
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