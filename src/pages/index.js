import { Link } from 'gatsby';
import * as React from 'react';
import InfoCard from '../components/info-card';
import Layout from '../components/layout';
import PortCardLeft from '../components/port-card-left';
import MeowsteriesImage from '../images/DorianScreenshot.jpg';
import GoldLiningWork from '../images/GoldLiningWork.png';
import HGGGif from '../images/HGG_Gif_Crop.gif';
import OndineGif from '../images/Ondine.gif';

const GoldLiningSpan =
<span>
  A narrative platformer about a Chinese American protagonist finding her way home from a fantastical realm which received $100k+ in funding from Microsoft ID@Xbox and Code Coven. <i>No longer in development</i>. <a href="https://store.steampowered.com/app/3036500/Gold_Lining/">Steam page</a>.

  <p>As a <b>level designer</b> for <a href="https://sonderingstudio.com/">Sondering Studio</a> from June - September 2023, I...
    <ul>
      <li>Prototyped 4 playable levels in Unity as only level designer, iterating following feedback from studio leads</li>
      <li>Designed puzzles to teach new mechanics (danger/respawning, breaking rocks to create platforms, light-based platforms), escalate known mechanics, communicate emotional experience, and escalate in difficulty</li>
    </ul>
  </p>

  <p>More details about my work can be found <a href="https://docs.google.com/document/d/1JqpcJSnOUhlze6JawpeUvXu1F7WdcI7cqsAE2avdZpE/edit?tab=t.0">in this doc</a>.</p>
</span>

const GoldLiningAlt = "Text: progressive increase in intensity: easy jumps --> timed double jumps --> double jumping will kill you, must time single jumps well. Image: Level design prototype. Text: intense setpiece as dramatic finale to this section. reuses previous double jump timing in a new context. Image: Level design prototype."

const MeowsteriesSpan = 
<span>
  A heartwarming kinetic visual novel with point-and-click elements developed in November 2024 (GitHub Game Off, 1 month). Playable in browser on <a href="https://viviennelin.itch.io/meowsteries-of-tiramisu-apts">itch.io</a>. Code on <a href="https://github.com/rh5140/GameOff2024">GitHub</a>.

  <p>As a <b>programmer</b> in a team of 7, I...<ul>
    <li>Implemented reusable framework for narrative and minigame using <b>Unity, C#, and Yarn Spinner</b></li>
    <li>Wrote step-by-step guides and <b>documentation</b> for writers and developers</li>
    <li>Mentored two other programmers new to tech stack through pair programming and <b>GitHub code reviews</b>, empowering them to implement critical gameplay features by <b>weekly sprint deadline</b></li>
    <li>Flexed as 2D artist and visual designer for Marie-Elle, Dorian, main menu splash art, and credits</li>
  </ul></p>
</span>

const MeowsteriesAlt = "A screenshot of a cross-armed brown man with a bun, red sunglasses, snake bites, wearing blood-splattered scrubs."

const HGGSpan =
<span>
  A visual novel dating sim that encourages the player to pay attention, paralleling what the protagonist needs to work on in her relationships. Playable on <a href="https://raddishradish.itch.io/hey-girlie">itch.io</a>. Code on <a href="https://github.com/rh5140/HeyGirlieGame">GitHub</a>.

  <p>I served as <b>game director, designer, and engineer</b>, leading an international team of 52 creatives.  </p>

  <p>**This is a <i>Fantasy High</i> fan project unaffiliated with Dimension 20 or Dropout.**</p>

  <p> <Link to="/hgg"><button>Learn more!</button></Link>  </p>
</span>

const HGGAlt = "A gif of the opening of Hey, Girlie!, in which Kristen is intercepted by Principal Aguefort in the halls of Aguefort Adventuring Academy"

const OndineSpan=
<span>
  A 2D pixel shooter centered around swapping weapons and surviving hordes. Play on <a href="https://store.steampowered.com/app/3891230/Ondine_Prototype/">Steam</a>.
  <p>As a <b>programmer</b> for Pier38 from September 2024 - March 2025, I...<ul>
    <li>Delivered new features, including but not limited to unlockable levels, difficulty modes, tutorials, save system, and balance changes, ahead of schedule, reducing turnaround from 1 week to 1-3 days</li>
    <li>Streamlined development process by rewriting <b>C#</b> code, reworking <b>Unity</b> scenes and prefabs, and organizing scripts</li>
    <li>Overhauled art implementation by establishing consistent art import settings, replacing placeholder assets with final pixel art, simplifying animation state machines</li>
  </ul></p>
</span>

const OndineAlt = "A gif of a 2D pixel shooter game, featuring lots of enemies swarming the player"

const GamedevPage = () => {
  return (
    <Layout pageTitle="Game Design & Development">
      <InfoCard image={HGGGif} alt={HGGAlt} text={HGGSpan} title="Hey, Girlie!"></InfoCard>
      <p></p>
      <InfoCard image={OndineGif} alt={OndineAlt} text={OndineSpan} title="Ondine: Prototype"></InfoCard>
      <p></p>
      <InfoCard image={MeowsteriesImage} alt={MeowsteriesAlt} text={MeowsteriesSpan} title="The Many Meow-steries of Tiramisu Apartments"></InfoCard>
      <p></p>
      <InfoCard image={GoldLiningWork} alt={GoldLiningAlt} text={GoldLiningSpan} title="Gold Lining"></InfoCard>
    </Layout>
  )
}
export default GamedevPage