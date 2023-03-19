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

const GrabbSpan = 
<span>
  A 2D aim-and-shoot game featuring a hungry chameleon, developed solo

  <p><b>Timeline:</b> Dec 2021 (10 days)</p>

  <p><b>Contributions:</b> Prototyped and implemented game mechanics and text parser in C#; illustrated in Adobe Photoshop; composed <a href="https://musescore.com/user/39562343/scores/7325780/s/kd3eSL">main menu</a> and <a href="https://musescore.com/user/39562343/scores/7325804/s/s3T9Qs">background</a> music in MuseScore</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop, MuseScore</p>

  <p>Runner-up in <a href="https://github.com/rh5140/chameleon-game">2022 "Science is Art" Competition</a> held by UCLA Science Libraries</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/grabb-grab-grub">itch.io</a> and check out the <a href="https://github.com/rh5140/chameleon-game">GitHub repo</a>!</p>
</span>

const GrabbAlt = "Screenshot of game with chameleon sitting on a branch with a caught bug on the end of its tongue. There are six other flying bugs on screen, and two concentric pink circles represent the cursor. The top left corner reads 'Time remaining: 00:23' and the top right reads '5 of 30 caught'. The background is a light blue and green watercolor texture."
const CrankySpan = 
<span>
  A comedic walking simulator about a cranky old man, developed with a team of seven

  <p><b>Timeline: </b>Jul - Aug 2022 (48 hour game jam)</p>

  <p><b>Contributions: </b>Wrote all dialogue; designed interactions; programmed dialogue manager and text parser</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Unity Collab, Google Docs, Adobe Photoshop</p>

  {/* <p>Read more about my process <a href="https://rh5140.github.io/cranky">here</a> (in progress)</p> */}
  
  <p>Play the game on <a href="https://brandmuffin.itch.io/cranky">itch.io</a>!</p>
</span>

const CrankyAlt = "Three black and white drawings of an old man wearing a newsboy hat, vest over long-sleeve shirt, long pants, loafers, and holding a cane at different frames of a walking animation underneath the title 'Cranky.' on a white background."


const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
      <InfoCard image={ScribbleRushScreenshot} alt={ScribbleRushAlt} text={ScribbleRushSpan} title="Scribble Rush"></InfoCard>
      <p></p>
      <InfoCard image={Flytrap} alt={FlytrapAlt} text={DebuggerSpan} title="Debugger"></InfoCard>
      <p></p>
      <InfoCard image={SMLevelDesign} alt={SMLevelAlt} text={SMLevelSpan} title="Super Mario Level Design"></InfoCard>
      <p></p>
      <InfoCard image={GrabbScreenshot} alt={GrabbAlt} text={GrabbSpan} title="Grabb Grab Grub!!"></InfoCard>
      <p></p>
      <InfoCard image="https://img.itch.zone/aW1nLzY2NDgyNDYucG5n/original/b6Aqmq.png" alt={CrankyAlt} text={CrankySpan} title="Cranky."></InfoCard>
    </Layout>
  )
}
export default IndexPage