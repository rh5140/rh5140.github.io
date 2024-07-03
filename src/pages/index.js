import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PlateGif from '../images/Plate.gif'
import Flytrap from '../images/debugger.gif'
import GoldLiningLogo from '../images/goldlininglogo.jpg'
import GrabbScreenshot from '../images/grabb.gif'
import ScribbleRushScreenshot from '../images/scribble.gif'
import SMLevelDesign from '../images/smlevel.png'

const GoldLiningSpan =
<span>
  A narrative platformer featuring a Chinese American protagonist. Currently in development by <a href="https://sonderingstudio.com/">Sondering Studio</a>, an indie studio that emphasizes telling heartfelt Asian-American stories.

  <p>As the <i><b>only level designer</b></i> on the team that summer, I worked on 4 levels to <i><b>convey emotions and teach mechanics</b></i>. I sketched ideas for different mechanics and puzzles to get feedback on before implementing prototypes in Unity. I <i><b>documented my design intent</b></i> in detail with annotated screenshots and commented playthrough videos.</p>

  <p><b>Timeline:</b> Jun - Sep 2023 (Level Design Contractor)</p>

  <p><b>Tools:</b> Figma, Unity, Git/Github, Visual Studio Code (C#)</p>

  <p>Wishlist Gold Lining on <a href="https://store.steampowered.com/app/3036500/Gold_Lining/">Steam</a>! See <a href="https://docs.google.com/document/d/1JqpcJSnOUhlze6JawpeUvXu1F7WdcI7cqsAE2avdZpE/edit?usp=sharing">my work</a> on the game!</p>
</span>

const GoldLiningAlt = "The purple Sondering Studio logomark on a white background"

const ScribbleRushSpan =
<span>
  A party game that has you draw a growingly complex character in thirty seconds, developed with a team of 4. After finishing a drawing, the player can check out a gallery to see what other people drew!

  <p>Our goal was to make a silly, lighthearted game. I designed simple <i><b>UI layouts</b></i> with a playful, hand-drawn vibe and developed an <a href="https://davidmathlogic.com/colorblind/#%23DC267F-%23FF6000-%23FFB000-%2343B368-%23527EF1-%235A3FE0-%23FFFFFF-%238C8C8C-%23000000"><i><b>accessible color palette</b></i></a>.</p>

  <p><b>Timeline:</b> October 2022 (Ludum Dare 51 72 Hour Jam), November 2022 (polish for Independent Games Festival)</p>

  <p><b>Tools:</b> Figma, Adobe Photoshop, <a href="https://davidmathlogic.com/colorblind/">Coloring for Colorblindness</a></p>

  <p>Play the game on <a href="https://str0nkyk0ng.itch.io/scribble-rush">itch.io</a>!</p>
</span>

const ScribbleRushAlt = "A white screen with the text 'wicked elegant beetle' at the top; a 3-by-3 grid of wobbly squares with the colors magenta, orange, yellow, green, blue, purple, black, grey, white at the left; a drawing of a black beetle with a green horn and magenta wings framed in a wobbly black square in the middle; the number 3 enclosed in a magenta circle on the right."

const DebuggerSpan =
<span>
  A 2D level-based puzzle game centered around the player catching bugs (animals) to fix bugs (errors) to fix the game world, developed with a team of 11.

  <p>My goal with the game was to convey the idea that something is wrong with the world and the player must fix it (<a href="https://docs.google.com/presentation/d/1Q8mzyRM9JT42bwIH9Ay7DveNa4E0zYMxOa9RfQx3rSw/edit#slide=id.g10a79796d10_7_11">pitch deck for initial idea</a>). I <i><b>directed an interdisciplinary team</b></i> of students across multiple disciplines, delegating tasks and managing scope so we could have a completed project in May.</p>

  <p>I needed to <i><b>make sure all aspects of development aligned with the overall creative vision</b></i>. For example, the original color scheme was very bright and saturated, giving off the impression of a happy forest, so I asked the art team to darken and desaturate the colors for a darker mood. To further push the idea that catching bugs is "fixing" the world, I decided that the music should transition from sounding "glitchy" to "pure" as the player catches more bugs.</p>
  
  <p>One of my team members told me the project was the most fun they had all school year, and a subset of the team was excited enough about the project that they wanted to polish it up more the following summer!</p>

  <p><b>Timeline:</b> Jan - May 2022 (main development), Jun - Sep 2022 (QOL updates)</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/debugger">itch.io</a> and check out the <a href="https://github.com/rh5140/srs-team-bug">GitHub repo</a>!</p>
</span>

const FlytrapAlt = "The graphic has a black background and the text TEAM BUG in a red pixel font, with TEAM above BUG. The BUG is part of the word DEBUGGER, the rest of which is in white. On top of the letter E sits a cloaked Venus Flytrap character. The red text below says CATCH BUGS TO FIX BUGS."

const PlateSpan =
<span>
  This board game project was developed solo for <a href="https://classes.dma.ucla.edu/Winter24/157/">Design | Media Arts 157: Game Design</a> at UCLA, taught by Professor Sam Malabre and TA TJ Shin. Additionally, Professor Eddo Stern advised me on the project as part of Design | Media Arts 199: Directed Research.

  <p>Much on My Plate is drawn from my own experiences as a student struggling to balance everything I need to do and entering a positive feedback loop of feeling more and more overwhelmed and stressed.  Players accumulate tokens on their character piece's plate and are punished for losing tokens by gaining more stress tokens. Sometimes, I actively choose to make tradeoffs (such as choosing to work on this project instead of picking up my medication), but other times, it feels like my mental state prevents me from making the choice I want (like when I feel too stressed to eat). To communicate this, some cards provide the player a choice while others have their effects determined by the player's number of tokens. Player points are determined by the number of tokens they have, but players must attempt a final challenge of placing their pieces on a springy step before the game concludes, which is meant to punish players who have too much on their plate.</p>

  <p>I fabricated all of the physical elements of the projects. I spent a lot of time building staircases, painting, and making the paper spring for the middle platform.</p>
  
  <p><b>Timeline:</b> February - March 2024 (3 weeks)</p>

  <p><b>Tools:</b> Adobe Illustrator, Adobe InDesign, physical fabrication techniques (laser cut, painted, and glued wood; painted cardboard box; crafted paper spring and boxes; molded and painted clay tokens)</p>

  <p><a href="https://classes.dma.ucla.edu/Winter24/157/?page_id=11355&projectID=3">Class documentation page</a>. This project was temporarily transformed into an art piece representing becoming completely overwhelmed: <a href="https://drive.google.com/file/d/1TsMWvrJxPb1QTYfpJ_MggEPiGn8N6sxq/view">I Give Up</a></p>
</span>

const PlateAlt = "This gif swaps between several photos of a board game. This board game is made up of 4 staircases, colored red, blue, yellow, and green, that converge to a white platform. The character pieces placed on the staircase are students carrying plates, and there are clay tokens of different shapes on their plates."

const SMLevelSpan =
<span>
  A 2D platformer level designed to teach the player how to wall jump, inspired by Super Mario and developed solo. Platforms/walls/floor are grey and lava (which kills the player) is red. The player is the white square at the beginning, and the goal is to reach the yellow square at the end.

  <p>(1) The player learns to wall jump through repetition of the same motion across shortening platforms.</p>

  <p>(2) The player is encouraged to utilize their newly-acquired wall jump knowledge to take the safer path up top rather than risk dying to lava.</p>

  <p>(3) The player can practice wall jumping safely before taking on the final challenge.</p>

  <p><b>Timeline:</b> Jun 2022 (1 week)</p>

  <p><b>Tools:</b> Adobe Photoshop</p>
  
  <p>Read more about my process <a href="https://docs.google.com/document/d/1wQE0oKLY2pD6mjGFL4YD9SzvaCnPj3llYlxRQ9mjwGk/edit">here</a>!</p>

</span>

const SMLevelAlt = "A platformer level design with grey solid tiles and red lava tiles."

const GrabbSpan =
<span>
  A 2D aim-and-shoot game featuring a hungry chameleon, developed solo. To win and see a chameleon fun fact, the player must catch and eat 30 bugs in 30 seconds.

  <p>I wanted to try my hand at making a game entirely by myself, so I set a time limit for myself and scoped a simple game accordingly.  Like a real chameleon, the player must wait for the tongue to retract entirely before trying to catch a bug again, which adds friction to the gameplay. To match the frenetic gameplay, I composed a simple melody that speeds up as the time limit approaches.</p>

  <p><b>Timeline:</b> Dec 2021 (10 days)</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop, MuseScore</p>

  <p>Runner-up in <a href="https://intersectionsinscience.wordpress.com/gallery/science-is-art-2022-collection/">2022 "Science is Art" Competition</a> held by UCLA Science Libraries</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/grabb-grab-grub">itch.io</a> and check out the <a href="https://github.com/rh5140/chameleon-game">GitHub repo</a>!</p>
</span>

const GrabbAlt = "Screenshot of game with chameleon sitting on a branch with a caught bug on the end of its tongue. There are six other flying bugs on screen, and two concentric pink circles represent the cursor. The top left corner reads 'Time remaining: 00:23' and the top right reads '5 of 30 caught'. The background is a light blue and green watercolor texture."


const GamedevPage = () => {
  return (
    <Layout pageTitle="Portfolio">
      <h1>Professional Work</h1>
      <InfoCard image={GoldLiningLogo} alt={GoldLiningAlt} text={GoldLiningSpan} title="Gold Lining"></InfoCard>
      <p></p>
      <h1>Personal Work (Collaborative)</h1>
      <InfoCard image={ScribbleRushScreenshot} alt={ScribbleRushAlt} text={ScribbleRushSpan} title="Scribble Rush"></InfoCard>
      <p></p>
      <InfoCard image={Flytrap} alt={FlytrapAlt} text={DebuggerSpan} title="Debugger"></InfoCard>
      <p></p>
      <h1>Personal Work (Individual)</h1>
      <InfoCard image={PlateGif} alt={PlateAlt} text={PlateSpan} title="Much on My Plate"></InfoCard>
      <p></p>
      <InfoCard image={SMLevelDesign} alt={SMLevelAlt} text={SMLevelSpan} title="Super Mario Level Design"></InfoCard>
      <p></p>
      <InfoCard image={GrabbScreenshot} alt={GrabbAlt} text={GrabbSpan} title="Grabb Grab Grub!!"></InfoCard>
    </Layout>
  )
}
export default GamedevPage