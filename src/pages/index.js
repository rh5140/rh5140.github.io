import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import SMLevelDesign from '../images/SuperMarioLevelDesign.png'
import Flytrap from '../images/debugger.gif'
import GrabbScreenshot from '../images/grabb.gif'
import ScribbleRushScreenshot from '../images/scribble.gif'
import SonderingLogo from '../images/sonderinglogo.png'

const GoldLiningSpan =
<span>
  A narrative platformer featuring a Chinese American protagonist. Currently in development by <a href="https://twitter.com/sonderingstudio">Sondering Studio</a>, an indie studio partnered with Xbox.

  <p>As the only level designer on the team, I worked on 4 levels to convey emotions and teach mechanics based on guidance I was given. I sketched ideas for different mechanics and puzzles to get feedback on before implementing prototypes in Unity. I documented my design intentions in detail with annotated screenshots and commented playthrough videos so the team would be able to understand my work without me.</p>

  <p><b>Timeline:</b> Jun - Sep 2023 (Level Design Contractor)</p>

  <p><b>Tools:</b> Figma, Unity, Git/Github, Visual Studio Code (C#)</p>

  <p>Please email me [rayhsiaodev at gmail dot com] for an NDA pass to see <a href="https://raddishradish.itch.io/summer23-contract">my work</a>. (I have received approval from my employers to share those work samples under password protection.)</p>
</span>

const GoldLiningAlt = "The purple Sondering Studio logomark on a white background"

const ScribbleRushSpan =
<span>
  A party game that has you draw a growingly complex character in thirty seconds, developed with a team of 4. After finishing a drawing, the player can check out a gallery to see what other people drew!

  <p>Our goal was to make a silly, lighthearted game. I designed simple UI layouts intended to give off a playful, hand-drawn vibe to keep the emphasis on the player's drawing. It was also important to our team to make our game accessible to people with different kinds of color vision deficiency, so I made sure that colors would be distinct for people without normal color vision when developing the <a href="https://davidmathlogic.com/colorblind/#%23DC267F-%23FF6000-%23FFB000-%2343B368-%23527EF1-%235A3FE0-%23FFFFFF-%238C8C8C-%23000000">color palette</a>.</p>

  <p><b>Timeline:</b> October 2022 (Ludum Dare 51 72 Hour Jam), November 2022 (polish for Independent Games Festival)</p>

  <p><b>Tools:</b> Figma, Adobe Photoshop, <a href="https://davidmathlogic.com/colorblind/">Coloring for Colorblindness</a></p>

  {/* <p>Read more about my process <a href="https://rh5140.github.io/debugger">here</a> (in progress)</p>  */}

  <p>Play the game on <a href="https://str0nkyk0ng.itch.io/scribble-rush">itch.io</a>!</p>
</span>

const ScribbleRushAlt = "A white screen with the text 'wicked elegant beetle' at the top; a 3-by-3 grid of wobbly squares with the colors magenta, orange, yellow, green, blue, purple, black, grey, white at the left; a drawing of a black beetle with a green horn and magenta wings framed in a wobbly black square in the middle; the number 3 enclosed in a magenta circle on the right."

const DebuggerSpan =
<span>
  A 2D level-based puzzle game centered around the player catching bugs (animals) to fix bugs (errors) to fix the game world, developed with a team of 11.

  <p>My goal with the game was to convey the idea that something is wrong with the world and the player must fix it (<a href="https://docs.google.com/presentation/d/1Q8mzyRM9JT42bwIH9Ay7DveNa4E0zYMxOa9RfQx3rSw/edit#slide=id.g10a79796d10_7_11">pitch deck for initial idea</a>). I directed an interdisciplinary team of students across multiple disciplines, delegating tasks and managing scope so we could have a completed project in May.</p>

  <p>Originally, our color scheme was too bright and cheerful, so I asked the art team to desaturate and darken it. Additionally, to push the idea that catching bugs is "fixing" the world, I put forth the idea of having music transition from sounding "glitchy" to "pure" as the player catches more bugs.</p>
  
  <p>I wanted everyone to feel like they contributed something meaningful to the project and that they could feel proud of their work. I'm happy to say that one of my team members told me the project was the most fun they had all school year, and a subset of the team was excited enough about the project that they wanted to polish it up more the following summer!</p>

  <p><b>Timeline:</b> Jan - May 2022 (main development), Jun - Sep 2022 (QOL updates)</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/debugger">itch.io</a> and check out the <a href="https://github.com/rh5140/srs-team-bug">GitHub repo</a>!</p>
</span>

const FlytrapAlt = "The graphic has a black background and the text TEAM BUG in a red pixel font, with TEAM above BUG. The BUG is part of the word DEBUGGER, the rest of which is in white. On top of the letter E sits a cloaked Venus Flytrap character. The red text below says CATCH BUGS TO FIX BUGS."

const SMLevelSpan =
<span>
  A 2D platformer level designed to teach the player how to wall jump, inspired by Super Mario and developed solo. Platforms/walls/floor are grey and lava (which kills the player) is red. The player is the white square at the beginning, and the goal is to reach the yellow square at the end.

  <p>The first third of my level has player jump on platforms in a way that emulates the timing and distance required for wall jumping, with the platforms decreasing in size until the player can only progress by wall jumping. The idea is that the player has that jump pattern in their head by the time they have to wall jump and naturally figure out how to wall jump.</p>

  <p>The middle third of my level allows the player to make a choice: utilize the newly learned wall jump to take the safer path above, or take the path below (more precarious, but does not require wall jumping). This is intended to encourage the player to use what they just learned.</p>

  <p>Regardless of the player's previous choice, they will see they have no choice but to wall jump to reach the yellow square to complete the level. The area before the last lava pit has walls that the player can practice wall jumping on safely before taking on the final challenge.</p>

  <p><b>Timeline:</b> Jun 2022 (1 week)</p>

  <p><b>Tools:</b> Adobe Photoshop</p>
  
  <p>Read more about my process <a href="https://docs.google.com/document/d/1wQE0oKLY2pD6mjGFL4YD9SzvaCnPj3llYlxRQ9mjwGk/edit">here</a>!</p>


  {/* <p>Read more about my process <a href="https://rh5140.github.io/supermariolevel">here</a> (in progress)</p> */}
</span>

const SMLevelAlt = "A platformer level design with grey solid tiles and red lava tiles."

const GrabbSpan =
<span>
  A 2D aim-and-shoot game featuring a hungry chameleon, developed solo.

  <p>I wanted to try my hand at making a game entirely by myself, so I set a time limit for myself and scoped a simple game accordingly: flies spawn at random heights and enter from the right side of the screen, and the player must catch and eat 30 bugs in 30 seconds.  Like a real chameleon, the player must wait for the tongue to retract entirely before trying to catch a bug again, which adds friction to the gameplay. To match the frenetic nature of the gameplay, I composed a simple melody that speeds up as the time limit approaches. Since I drew both a win and lose screen, I wanted to make sure players couldn't win too easily, though from feedback I received, the game is a bit too difficult.</p>

  <p><b>Timeline:</b> Dec 2021 (10 days)</p>

  {/* <p><b>Contributions:</b> Prototyped and implemented game mechanics and text parser in C#; illustrated in Adobe Photoshop; composed <a href="https://musescore.com/user/39562343/scores/7325780/s/kd3eSL">main menu</a> and <a href="https://musescore.com/user/39562343/scores/7325804/s/s3T9Qs">background</a> music in MuseScore</p> */}

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop, MuseScore</p>

  <p>Runner-up in <a href="https://intersectionsinscience.wordpress.com/gallery/science-is-art-2022-collection/">2022 "Science is Art" Competition</a> held by UCLA Science Libraries</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/grabb-grab-grub">itch.io</a> and check out the <a href="https://github.com/rh5140/chameleon-game">GitHub repo</a>!</p>
</span>

const GrabbAlt = "Screenshot of game with chameleon sitting on a branch with a caught bug on the end of its tongue. There are six other flying bugs on screen, and two concentric pink circles represent the cursor. The top left corner reads 'Time remaining: 00:23' and the top right reads '5 of 30 caught'. The background is a light blue and green watercolor texture."

const GamedevPage = () => {
  return (
    <Layout pageTitle="Portfolio">
      <h1>Professional Work</h1>
      <InfoCard image={SonderingLogo} alt={GoldLiningAlt} text={GoldLiningSpan} title="Gold Lining (NDA Project)"></InfoCard>
      <p></p>
      <h1>Personal Work (Collaborative)</h1>
      <InfoCard image={ScribbleRushScreenshot} alt={ScribbleRushAlt} text={ScribbleRushSpan} title="Scribble Rush"></InfoCard>
      <p></p>
      <InfoCard image={Flytrap} alt={FlytrapAlt} text={DebuggerSpan} title="Debugger"></InfoCard>
      <p></p>
      <h1>Personal Work (Individual)</h1>
      <InfoCard image={SMLevelDesign} alt={SMLevelAlt} text={SMLevelSpan} title="Super Mario Level Design"></InfoCard>
      <p></p>
      <InfoCard image={GrabbScreenshot} alt={GrabbAlt} text={GrabbSpan} title="Grabb Grab Grub!!"></InfoCard>
    </Layout>
  )
}
export default GamedevPage