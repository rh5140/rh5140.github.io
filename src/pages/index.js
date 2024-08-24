import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PortCardLeft from '../components/port-card-left'
import Flytrap from '../images/debugger.gif'
import GoldLiningWork from '../images/GoldLiningWork.png'
import GrabbScreenshot from '../images/grabb.gif'
import ScribbleRushScreenshot from '../images/scribble.gif'
import SMLevelDesign from '../images/smlevel.png'
import ToyTossTowerImage from '../images/ToyTossTower.png'

const GoldLiningSpan =
<span>
  <p>A narrative platformer featuring a Chinese American protagonist. Gold Lining is currently in development by <a href="https://sonderingstudio.com/">Sondering Studio</a>, an indie studio that emphasizes telling heartfelt Asian-American stories</p>

  <p>Available to wishlist on <a href="https://store.steampowered.com/app/3036500/Gold_Lining/">Steam</a>.</p>

  <p>I worked on 4 levels to <i><b>convey emotions and teach mechanics</b></i>. I sketched ideas for different mechanics and puzzles to get feedback on before implementing prototypes in Unity. I <i><b>documented my design intent</b></i> in detail with annotated screenshots and commented playthrough videos. If you're interested in more specifics, check out this <a href="https://docs.google.com/document/d/1JqpcJSnOUhlze6JawpeUvXu1F7WdcI7cqsAE2avdZpE/edit?usp=sharing">more detailed document of my contributions</a>.</p>

  <p><b>Timeline:</b> Jun - Sep 2023 (Level Design Contractor)</p>

  <p><b>Tools:</b> Figma, Unity, Git/Github, Visual Studio Code (C#)</p>
</span>

const GoldLiningAlt = "Text: progressive increase in intensity: easy jumps --> timed double jumps --> double jumping will kill you, must time single jumps well. Image: Level design prototype. Text: intense setpiece as dramatic finale to this section. reuses previous double jump timing in a new context. Image: Level design prototype."

const ToyTossTowerSpan =
<span>
  <p>A silly game in which you toss toy blocks for a minute, developed with my friend. Developed in 96 hours for GMTK Game Jam 2024: Built to Scale.</p>

  <p>Available to play in browser on <a href="https://raddishradish.itch.io/toy-toss-tower">itch.io</a> (mobile recommended). See the code on the <a href="https://github.com/rh5140/towerup">GitHub repo</a>.</p>

  <p>I wanted this game to focus on the the simple joy of a physics sim. I <b><i>programmed the gameplay mechanics</i></b> in C#. For the block throwing mechanic, the blocks freeze position after landing or despawn if they fall towards the player to reduce frustration. I <b><i>designed the interfaces in Figma</i></b> with mobile in mind (throwing blocks and pressing buttons can all be easily done with one thumb) then implemented them in Unity. I drew the cat playmat and wood textures in MediBang Paint and designed the itch banner/header in Figma.</p>

  <p><b>Timeline:</b> August 2024 (GMTK Game Jam 2024, 96 hours)</p>

  <p><b>Tools:</b> Unity 3D, Visual Studio Code (C#), Git/Github, Figma, MediBang Paint</p>
</span>

const ToyTossTowerAlt = "Two rows of images, with the top being the final version of the game and the bottom being UI mockups with early dev screenshots."


const ScribbleRushSpan =
<span>
  <p>A party game that has you draw a growingly complex character in thirty seconds, developed with a team of 4. After finishing a drawing, the player can check out a gallery to see what other people drew!</p>

  <p>Available to download on <a href="https://str0nkyk0ng.itch.io/scribble-rush">itch.io</a>.</p>

  <p>Our goal was to make a silly, lighthearted game. I designed simple <i><b>UI layouts</b></i> with a playful, hand-drawn vibe and developed an <a href="https://davidmathlogic.com/colorblind/#%23DC267F-%23FF6000-%23FFB000-%2343B368-%23527EF1-%235A3FE0-%23FFFFFF-%238C8C8C-%23000000"><i><b>accessible color palette</b></i></a>.</p>

  <p><b>Timeline:</b> October 2022 (Ludum Dare 51 72 Hour Jam), November 2022 (polish for Independent Games Festival)</p>

  <p><b>Tools:</b> Figma, Adobe Photoshop, <a href="https://davidmathlogic.com/colorblind/">Coloring for Colorblindness</a></p>
</span>

const ScribbleRushAlt = "A white screen with the text 'wicked elegant beetle' at the top; a 3-by-3 grid of wobbly squares with the colors magenta, orange, yellow, green, blue, purple, black, grey, white at the left; a drawing of a black beetle with a green horn and magenta wings framed in a wobbly black square in the middle; the number 3 enclosed in a magenta circle on the right."

const DebuggerSpan =
<span>
  <p>A 2D level-based puzzle game centered around the player catching bugs (animals) to fix bugs (errors) to fix the game world, developed with a team of 11.</p>

  <p>Available to play in browser on <a href="https://raddishradish.itch.io/debugger">itch.io</a>. See the code on the <a href="https://github.com/rh5140/srs-team-bug">GitHub repo</a>.</p>

  <p>My goal with the game was to convey the idea that something is wrong with the world and the player must fix it (<a href="https://docs.google.com/presentation/d/1Q8mzyRM9JT42bwIH9Ay7DveNa4E0zYMxOa9RfQx3rSw/edit#slide=id.g10a79796d10_7_11">pitch deck for initial idea</a>). I <i><b>directed an interdisciplinary team</b></i> of students across multiple disciplines, delegating tasks and managing scope so we could have a completed project in May.</p>

  <p>I needed to <i><b>make sure all aspects of development aligned with the overall creative vision</b></i>. For example, the original color scheme was very bright and saturated, giving off the impression of a happy forest, so I asked the art team to darken and desaturate the colors for a darker mood. To further push the idea that catching bugs is "fixing" the world, I decided that the music should transition from sounding "glitchy" to "pure" as the player catches more bugs.</p>
  
  <p>One of my team members told me the project was the most fun they had all school year, and a subset of the team was excited enough about the project that they wanted to polish it up more the following summer!</p>

  <p><b>Timeline:</b> Jan - May 2022 (main development), Jun - Sep 2022 (QOL updates)</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop</p>
</span>

const FlytrapAlt = "The graphic has a black background and the text TEAM BUG in a red pixel font, with TEAM above BUG. The BUG is part of the word DEBUGGER, the rest of which is in white. On top of the letter E sits a cloaked Venus Flytrap character. The red text below says CATCH BUGS TO FIX BUGS."

const SMLevelSpan =
<span>
  A 2D platformer level designed to teach the player how to wall jump, inspired by Super Mario and developed solo. Platforms/walls/floor are grey and lava (which kills the player) is red. The player is the white square at the beginning, and the goal is to reach the yellow square at the end.

  <p>(1) The player learns to wall jump through repetition of the same motion across shortening platforms.</p>

  <p>(2) The player is encouraged to utilize their newly-acquired wall jump knowledge to take the safer path up top rather than risk dying to lava.</p>

  <p>(3) The player can practice wall jumping safely before taking on the final challenge.</p>

  If you're interested in more details, check out my <a href="https://docs.google.com/document/d/1wQE0oKLY2pD6mjGFL4YD9SzvaCnPj3llYlxRQ9mjwGk/edit">detailed design document</a>!

  <p><b>Timeline:</b> Jun 2022 (1 week)</p>

  <p><b>Tools:</b> Adobe Photoshop</p>
</span>

const SMLevelAlt = "A platformer level design with grey solid tiles and red lava tiles."

const GrabbSpan =
<span>
  A 2D arcade game featuring a hungry chameleon, developed solo. To win and see a chameleon fun fact, the player must catch and eat 30 bugs in 30 seconds.

  <p>Available to play in browser on <a href="https://raddishradish.itch.io/grabb-grab-grub">itch.io</a>. See the code on the <a href="https://github.com/rh5140/chameleon-game">GitHub repo</a></p>

  <p>I wanted to try my hand at making a game entirely by myself, so I set a time limit for myself and scoped a simple game accordingly.  Like a real chameleon, the player must wait for the tongue to retract entirely before trying to catch a bug again, which adds friction to the gameplay. To match the frenetic gameplay, I composed a simple melody that speeds up as the time limit approaches.</p>

  <p><b>Timeline:</b> Dec 2021 (10 days)</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop, MuseScore</p>

  <p>Runner-up in <a href="https://intersectionsinscience.wordpress.com/gallery/science-is-art-2022-collection/">2022 "Science is Art" Competition</a> held by UCLA Science Libraries</p>

</span>

const GrabbAlt = "Screenshot of game with chameleon sitting on a branch with a caught bug on the end of its tongue. There are six other flying bugs on screen, and two concentric pink circles represent the cursor. The top left corner reads 'Time remaining: 00:23' and the top right reads '5 of 30 caught'. The background is a light blue and green watercolor texture."


const GamedevPage = () => {
  return (
    <Layout pageTitle="Portfolio">
      <h1>Professional Work</h1>
      <InfoCard image={GoldLiningWork} alt={GoldLiningAlt} text={GoldLiningSpan} title="Gold Lining"></InfoCard>
      <p></p>
      <h1>Personal Work (Collaborative)</h1>
      <PortCardLeft image={ToyTossTowerImage} alt={ToyTossTowerAlt} text={ToyTossTowerSpan} title="Toy Toss Tower"></PortCardLeft>
      <p></p>
      <InfoCard image={ScribbleRushScreenshot} alt={ScribbleRushAlt} text={ScribbleRushSpan} title="Scribble Rush"></InfoCard>
      <p></p>
      <PortCardLeft image={Flytrap} alt={FlytrapAlt} text={DebuggerSpan} title="Debugger"></PortCardLeft>
      <p></p>
      <h1>Personal Work (Individual)</h1>
      <InfoCard image={SMLevelDesign} alt={SMLevelAlt} text={SMLevelSpan} title="Super Mario Level Design"></InfoCard>
      <p></p>
      <PortCardLeft image={GrabbScreenshot} alt={GrabbAlt} text={GrabbSpan} title="Grabb Grab Grub!!"></PortCardLeft>
    </Layout>
  )
}
export default GamedevPage