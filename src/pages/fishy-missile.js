import * as React from 'react';
import GameInfo from '../components/game-info';
import InfoBox from '../components/info-box';
import InfoCard from '../components/info-card';
import { thirdImage, tripleImage } from '../components/info-card.module.css';
import Layout from '../components/layout';

const FishyMissileSummary = <span><b><i>Fishy Missile</i></b> is a comically evil (not-)fishing simulator where you dodge fish and collect scrap to build a moon-destroying missile. We wanted to create an experirence that could only work as a mobile game, and we also wanted the game to be accessible to a younger audience.</span>
const FishyMissileLinks = <span><a href="https://apps.apple.com/us/app/fishy-missile/id6778155374" target="_blank"><button>Play on iOS</button></a> <a href="https://play.google.com/store/apps/details?id=com.MassDiGI.CarpybarasGame" target="_blank"><button>Play on Android</button></a></span>
const FishyMissileContributions = <span><ul>
                              <li>Implemented tilt controls that calibrate instantly to current device orientation at the start of each play session, solving player frustration over inability to play tilt-based mobile games while lying down</li>
                              <li>Designed and implemented features, including cutscene and gameplay flow, depth meter, and hazards, in collaboration with 2 other programmers, 3 artists, and 1 audio designer</li>
                              <li>Conducted A/B testing with target demographic (children ages 9+) to identify preferred control scheme</li>
                              <li>Facilitated daily tech Kanban board review, reviewed code, and incorporated show-and-tell into end-of-day meeting</li>
                              </ul>
                    </span>
const FishyMissileTiltControls = <span><h2>Tilt Controls</h2>
  <p>Tilt controls are unique to mobile, so my team was interested in making that our game's primary control scheme. Only a few popular games like <i>Ninja Fishing</i>, <i>Temple Run</i>, and <i>Doodle Jump</i> use tilt controls, so we weren't sure how the unconventional control scheme would be received. We did A/B testing comparing touch controls against tilt controls. We concluded that while touch is significantly easier to control, tilt is more fun in and of itself. Additionally, touch controls means that fingers will block some of the game view.
  
  <p>Using tilt rather than touch also opened up the possibility for touch-based powerups, which led to our noclip dev tool making it into the final game as the ghost powerup.</p>
  
  <p>I owned the tilt controls, and I was interested in a novel implementation unlike the previous three games mentioned.</p>
  <ul>
      <li><b>Problem:</b> Accelerometer-based tilt controls in <i>Ninja Fishing</i>, <i>Temple Run</i>, and <i>Doodle Jump</i> make it impossible for the game to be played while lying down.</li>
      <li><b>Solution:</b> Use the attitude (orientation) sensor instead, calculating relative tilt based on a reference orientation.</li>
      <li><b>Trade-off:</b> Upright rotation is interpreted as tilt, so the game is difficult to play in moving vehicles or while walking.</li>
      <li><b>Justification:</b> Most people will play the game while they are stationary, and people really like using their phone while lying on their side.</li>
    </ul>

    <ul>
      <li><b>Problem:</b> Requiring the player to hold the phone still to calibrate disrupts the game flow.</li>
      <li><b>Solution:</b> Automatically set a new reference orientation whenever a player swipes the start lever to begin a new session.</li>
      <li><b>Trade-off:</b> The player may start the game at an awkward angle.</li>
      <li><b>Justification:</b> Sessions are short, and the player can easily restart a dredge and re-calibrate.</li>
    </ul>
  </p>
  </span>
const FishyMissilePage = () => {
  return (
    <Layout pageTitle="Fishy Missile">
      <GameInfo summary={FishyMissileSummary}
                genre="2D comedic fishing game" 
                platforms="iOS, Android"
                tools="Unity, C#, Plastic SCM" 
                size="7"
                duration="May 2026 - July 2026 (3 months)"
                status="Released July 2026"
                links={FishyMissileLinks}
                video="https://www.youtube.com/embed/-E0ExsUGsFo"
                roles="Lead Programmer"
                contributions={FishyMissileContributions}>
      </GameInfo>
      <p></p>
      <InfoBox content={FishyMissileTiltControls}></InfoBox>
    </Layout>
  )
}
export default FishyMissilePage