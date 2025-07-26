import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PortCardLeft from '../components/port-card-left'
import MeowsteriesImage from '../images/DorianScreenshot.jpg'
import GoldLiningWork from '../images/GoldLiningWork.png'
import HGGGif from '../images/HGG_Gif_Crop.gif'
import JealatinImage from '../images/JealatinSplat.gif'
import ToyTossTowerImage from '../images/ToyTossTower.png'

const GoldLiningSpan =
<span>
  <p>A narrative platformer about a Chinese American protagonist finding her way home from a fantastical realm which received $100k+ in funding from Microsoft ID@Xbox and Code Coven. <i>No longer in development</i>. <a href="https://store.steampowered.com/app/3036500/Gold_Lining/">Steam page</a>.</p>

  <p>As a <b>level designer</b> for <a href="https://sonderingstudio.com/">Sondering Studio</a> from June - September 2023, I...
    <ul>
      <li>Prototyped 4 playable levels in Unity as only level designer, iterating following feedback from studio leads</li>
      <li>Designed puzzles to teach new mechanics (danger/respawning, breaking rocks to create platforms, light-based platforms), escalate known mechanics, communicate emotional experience, and escalate in difficulty</li>
    </ul>
  </p>

  <p>More details about my work can be found <a href="https://docs.google.com/document/d/1JqpcJSnOUhlze6JawpeUvXu1F7WdcI7cqsAE2avdZpE/edit?tab=t.0">in this doc</a>.</p>
</span>

const GoldLiningAlt = "Text: progressive increase in intensity: easy jumps --> timed double jumps --> double jumping will kill you, must time single jumps well. Image: Level design prototype. Text: intense setpiece as dramatic finale to this section. reuses previous double jump timing in a new context. Image: Level design prototype."

const JealatinSpan =
<span>
  <p>A 2D puzzle game in which you play as a color-changing slime trying to escape containment, developed in 72 hours for Mini Jam 166: Earth with the limitation of "no green." Out of 211 entries, Jealatin ranked #7 for Use of the Limitation, #12 for Concept, and #17 Overall. 
    Playable in browser on <a href="https://jabenero.itch.io/jealatin">itch.io</a>. Code on <a href="https://github.com/AlexanderC5/jealatin">GitHub</a>.</p>

  <p>As the <b>puzzle designer</b> in a team of 2, I...
    <ul>
      <li><b>Designed 10 levels in Unity</b> to teach color interaction mechanics and escalate in difficulty</li>
      <li>Created art assets with additional visual indicators and colorblindness tool to promote accessibility</li>
    </ul>
  </p>
</span>

const JealatinAlt = "A gif of a yellow slime swallowing blueberries, absorbing the blue color, turning green, and exploding."


const ToyTossTowerSpan =
<span>
  <p>A silly game in which you toss toy blocks for a minute, developed in 96 hours for GMTK Game Jam 2024: Built to Scale. Playable in browser on <a href="https://raddishradish.itch.io/toy-toss-tower">itch.io</a> (mobile recommended). Code on <a href="https://github.com/rh5140/towerup">GitHub</a>.</p>

  <p>As the <b>designer and developer</b> in a team of 2, I...
    <ul>
      <li>Designed and implemented core gameplay loop of tossing blocks with <b>Unity and C#</b>, intentionally excluding a scoring system for relaxed experience</li>
      <li><b>Iterated</b> on block throwing mechanic following feedback, freezing position after landing or despawning if they fall towards the player to reduce frustration</li>
      <li>Developed <b>mobile-friendly wireframes in Figma</b> and implemented UI in Unity (uGUI) to match</li>
      <li>Created graphics used for itch.io page and textures used for game assets</li>
    </ul>
  </p>
</span>

const ToyTossTowerAlt = "Two rows of images, with the top being the final version of the game and the bottom being UI mockups with early dev screenshots."

const MeowsteriesSpan = 
<span>
  <p>A heartwarming kinetic visual novel with point-and-click elements developed in November 2024 (GitHub Game Off, 1 month). Playable in browser on <a href="https://viviennelin.itch.io/meowsteries-of-tiramisu-apts">itch.io</a>. Code on <a href="https://github.com/rh5140/GameOff2024">GitHub</a>.</p>

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
  <p>A visual novel dating sim based on Fantasy High: Junior Year. <i>Fan project unaffiliated with Dimension 20 or Dropout.</i> Playable on <a href="https://raddishradish.itch.io/hey-girlie">itch.io</a>. Code on <a href="https://github.com/rh5140/HeyGirlieGame">GitHub</a>.</p>

  <p>As the <b>lead developer and producer</b>, I...
    <ul>
      <li>Designed and implemented core location-based gameplay loop of visual novel dating sim for PC, MacOS, and browser, receiving <b>10k combined downloads and browser plays in first week of release</b></li>
      <li>Shipped weekly builds for internal playtesting, implementing accessibility features like a tutorial and location hints following playtest feedback</li>
      <li>Created and wrote documentation for modular gameplay components using <b>Unity, C#, and Yarn Spinner</b></li>
      <li>Developed workflow and timeline for <b>52-member cross-functional international team</b>, communicating via Discord and tracking deadlines and progress with Trello and Google Sheets</li>
      <li>Reviewed code and implementation changes by 3 other developers on GitHub</li>
    </ul>
  </p>
</span>

const HGGAlt = "A gif of the opening of Hey, Girlie!, in which Kristen is intercepted by Principal Aguefort in the halls of Aguefort Adventuring Academy"

const GamedevPage = () => {
  return (
    <Layout pageTitle="Game Design & Development">
      <PortCardLeft image={HGGGif} alt={HGGAlt} text={HGGSpan} title="Hey, Girlie!"></PortCardLeft>
      <p></p>
      <PortCardLeft image={MeowsteriesImage} alt={MeowsteriesAlt} text={MeowsteriesSpan} title="The Many Meow-steries of Tiramisu Apartments"></PortCardLeft>
      <p></p>
      <PortCardLeft image={GoldLiningWork} alt={GoldLiningAlt} text={GoldLiningSpan} title="Gold Lining"></PortCardLeft>
      {/* <p></p>
      <PortCardLeft image={ToyTossTowerImage} alt={ToyTossTowerAlt} text={ToyTossTowerSpan} title="Toy Toss Tower"></PortCardLeft>
      <p></p>
      <PortCardLeft image={JealatinImage} alt={JealatinAlt} text={JealatinSpan} title="Jealatin"></PortCardLeft>
      <p></p> */}
    </Layout>
  )
}
export default GamedevPage