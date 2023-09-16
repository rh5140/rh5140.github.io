import * as React from 'react'
import Layout from '../components/layout'
import InfoCard from '../components/info-card'
import GrabbScreenshot from '../images/GrabbScreenshot.png'
import Flytrap from '../images/DebuggerTItle.png'
import SMLevelDesign from '../images/SuperMarioLevelDesign.png'
import ScribbleRushScreenshot from '../images/ScribbleRushScreenshot.png'

const ScribbleRushSpan = 
<span>
  A party game that has you draw a growingly complex character in thirty seconds, developed with a team of four.

  <p><b>Timeline:</b> October 2022 (Ludum Dare 51 72 Hour Jam), November 2022 (polish for Independent Games Festival)</p>

  <p><b>Contributions:</b> Designed game screen layouts; created art assets; developed accessible color palette based on IBM's; checked for visual inconsistencies and playtested</p>

  <p><b>Tools:</b> Figma, Adobe Photoshop, <a href="https://davidmathlogic.com/colorblind/">Coloring for Colorblindness</a></p>

  <p><b>Team:</b> Aaron Isara, Alvin Liu, Aidan Strong</p>

  {/* <p>Read more about my process <a href="https://rh5140.github.io/debugger">here</a> (in progress)</p>  */}

  <p>Play the game on <a href="https://str0nkyk0ng.itch.io/scribble-rush">itch.io</a>!</p>
</span>

const ScribbleRushAlt = "A white screen with the text 'wicked elegant beetle' at the top; a 3-by-3 grid of wobbly squares with the colors magenta, orange, yellow, green, blue, purple, black, grey, white at the left; a drawing of a black beetle with a green horn and magenta wings framed in a wobbly black square in the middle; the number 3 enclosed in a magenta circle on the right."

const DebuggerSpan = 
<span>
  A 2D level-based puzzle game centered around the player catching bugs (animals) to fix bugs (errors) to fix the game world, developed with a team of 11

  <p><b>Timeline:</b> Jan - May 2022 (main development), Jun - Sep 2022 (QOL updates)</p>

  <p><b>Contributions:</b> Directed team of 11 developers; developed game concept and design goals; tuned visuals, audio, mechanics according to design goals; designed dialogue boxes, menu layout, and UI icons</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop</p>

  <p><b>Team:</b> Alexander Chen, Aubrey Clark, Mike Han, Kevin Hong, Amber Jiang, Victoria Lam, Brad Lowe, Felix Peng, Anbu Vajuravel, Andrew Zhu, Spencer Gouw</p>

  {/* <p>Read more about my process <a href="https://rh5140.github.io/debugger">here</a> (in progress)</p>  */}

  <p>Play the game on <a href="https://raddishradish.itch.io/debugger">itch.io</a> and check out the <a href="https://github.com/rh5140/srs-team-bug">GitHub repo</a>!</p>
</span>

const FlytrapAlt = "The graphic has a black background and the text TEAM BUG in a red pixel font, with TEAM above BUG. The BUG is part of the word DEBUGGER, the rest of which is in white. On top of the letter E sits a cloaked Venus Flytrap character. The red text below says CATCH BUGS TO FIX BUGS."

const SMLevelSpan = 
<span>
  A 2D platformer level designed to teach the player how to wall jump, inspired by Super Mario and developed solo

  <p><b>Timeline:</b> Jun 2022 (1 week)</p>

  <p><b>Contributions:</b> Researched level design practices; developed multiple iterations of design; received and incorporated feedback from peers</p>

  <p><b>Tools:</b> Adobe Photoshop</p>
  
  <p>Read more about my process <a href="https://docs.google.com/document/d/1wQE0oKLY2pD6mjGFL4YD9SzvaCnPj3llYlxRQ9mjwGk/edit">here</a>!</p>


  {/* <p>Read more about my process <a href="https://rh5140.github.io/supermariolevel">here</a> (in progress)</p> */}
</span>

const SMLevelAlt = "A platformer level design with grey solid tiles and red lava tiles."

const GamedevPage = () => {
  return (
    <Layout pageTitle="Portfolio">
      <InfoCard image={ScribbleRushScreenshot} alt={ScribbleRushAlt} text={ScribbleRushSpan} title="Scribble Rush"></InfoCard>
      <p></p>
      <InfoCard image={Flytrap} alt={FlytrapAlt} text={DebuggerSpan} title="Debugger"></InfoCard>
      <p></p>
      <InfoCard image={SMLevelDesign} alt={SMLevelAlt} text={SMLevelSpan} title="Super Mario Level Design"></InfoCard>
    </Layout>
  )
}
export default GamedevPage