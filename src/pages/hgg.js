import * as React from 'react';
import GameInfo from '../components/game-info';
import InfoBox from '../components/info-box';
import InfoCard from '../components/info-card';
import { thirdImage, tripleImage } from '../components/info-card.module.css';
import Layout from '../components/layout';
import Hints from '../images/HggHintsCopy.png';
import HggLoop from '../images/HggLoop.png';
import HintExample from '../images/HintExample.png';
import HintUI from '../images/HintUI.png';
import Tut1 from '../images/Tut1.png';
import Tut2 from '../images/Tut2.png';
import Tut3 from '../images/Tut3.png';
import WeeklyUI from '../images/WeeklyUI_Layout_2.png';

const HggSummary = <span><b><i>Hey, Girlie!</i></b> is a visual novel dating simulator in which a high school senior needs to find a date to the Spring Fling or literally die! Disclaimer: This <i>Fantasy High</i> fan project is unaffiliated with Dimension 20 or Dropout.</span>
const HggLinks = <span>Play for free on <a href="https://raddishradish.itch.io/hey-girlie">itch.io</a>. See the code on <a href="https://github.com/rh5140/HeyGirlieGame">GitHub</a>.</span>
const HggContributions = <span><ul>
                    <li>Led an <b>international team of 52</b> artists, writers, programmers, voice actors, and composers to develop dating sim with 6 romanceable characters and 9 endings</li>
                    <li>Recruited 7 project leads to help delegate responsibilities, collaborating to establish guidelines, workflow, and timeline </li>
                    <li>Collaborated with team members to design core gameplay loop, iterating on diagrams and prototypes</li>
                    <li>Implemented and documented prefabs (modular gameplay components), scene set up, and functions for engineers and writers to use</li>
                    <li>Reviewed code and implementation changes by 3 other engineers on GitHub, resolving bugs and technical challenges</li>
                    <li>Shipped weekly builds for internal playtesting, making usability changes and implementing accessibility features like a tutorial and location hints following playtest feedback</li>
                    </ul>
                    </span>
const HggDesign = <span>
  Kristen, the protagonist, has <b>8 weeks</b> to get a date to Spring Fling. At the start of the game, the player can choose which love interest (LI) is prioritized. 

  <p><b>Each week</b>, Kristen goes on <b>3 dates</b> by selecting regions on a map. During the date, the player can <b>earn points towards a hidden Spring Fling success threshold depending on selected responses</b> and get a <b>hint for next week's date location</b>. A <b>post-date debrief</b> lets the player know how well the date went.</p>
  <p><b>A love interest can be encountered at most once per week</b>, and the <i>x</i>th date with <i>y</i> character will be the same regardless of what week you do it. We wanted each relationship to be paced over the 8 weeks and also allow players to experience routes outside of their "target" in case they find a new, unexpected love!</p> 
  <p><img src={WeeklyUI}></img></p>
  <p><i>Location selection UI by Kelp.</i></p>
  </span>

const HggChallenges = <span><h2>Challenges</h2>
                    Our first external playtest, conducted by Amanda Sharkey, revealed critical usability issues. However, we were deep into development at this point, so rather than restructuring systems, we added optional systems on top. Two of the changes Amanda recommended were adding location hints to the notebook and tutorializing the introduction more.
                    <h3>Location System Required Too Much Cognitive Load</h3>
                    While the hook behind the gameplay design was that the player needs to pay attention to dates to know where to go next, in practice, we found that expecting the player to not only notice but also remember the location hint by the time the next week rolled around was not realistic.

                    <p>I implemented an optional hint system accessible during the location selection screen. I wrote all of the hints, framing them as notes left behind by Cassandra, Kristen's wing-deity who lets her know how she did after each date.</p>
                      <div className={tripleImage}>
                        <div className={thirdImage}><img src={Hints}></img></div>
                        <div className={thirdImage}><img src={HintUI}></img></div>
                        <div className={thirdImage}><img src={HintExample}></img></div>
                      </div>

                      <h3>Controls Confusion</h3>
                      <p>Some of the game UI ws not immediately intuitive and also lacked associated text. I wrote and implemented an opt-in tutorial, integrating it in-universe rather than breaking the fourth wall.</p>
                      <p><div className={tripleImage}>
                        <div className={thirdImage}><img src={Tut1}></img></div>
                        <div className={thirdImage}><img src={Tut2}></img></div>
                        <div className={thirdImage}><img src={Tut3}></img></div>
                      </div></p>      
                      <p>The tutorial also covers some potential sources of gameplay confusion, like that you can only encounter a love interest once a week. While not the most effective way to communicate it to the player, it was the least disruptive way it could get added to the game.</p>               
                    </span>

const HggPage = () => {
  return (
    <Layout pageTitle="Hey, Girlie!">
      <GameInfo summary={HggSummary}
                role="game director, developer, designer" 
                genre="dating simulator, visual novel" 
                platforms="PC, Mac, WebGL"
                tools="Unity, Yarn Spinner, C#, GitHub" 
                size="52"
                duration="September 2024 - June 2025 (9 months)"
                status="Released May 2025, received 10k plays + downloads in first week"
                links={HggLinks}
                video="https://www.youtube.com/embed/sO2K9mphnFY?si=V-C3l8i3Toq5VSF5"
                roles="Game Director, Game Designer, & Engineer"
                contributions={HggContributions}>
      </GameInfo>
      <p></p>
      <InfoCard image={HggLoop} alt="diagram of Hey, Girlie's gameplay loop" text={HggDesign} title="Core Gameplay Loop"></InfoCard>
      <p></p>
      <InfoBox content={HggChallenges}></InfoBox>
    </Layout>
  )
}
export default HggPage