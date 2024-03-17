import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import FizzBuzzGif from '../images/FizzBuzz.gif'
import PlateGif from '../images/Plate.gif'
import Flytrap from '../images/debugger.gif'
import GrabbScreenshot from '../images/grabb.gif'
import NebulosusGif from '../images/nebulosus.gif'
import ScribbleRushScreenshot from '../images/scribble.gif'
import SMLevelDesign from '../images/smlevel.png'
import SonderingLogo from '../images/sonderinglogo.png'

const GoldLiningSpan =
<span>
  A narrative platformer featuring a Chinese American protagonist. Currently in development by <a href="https://twitter.com/sonderingstudio">Sondering Studio</a>, an indie studio partnered with Xbox.

  <p>As the <i><b>only level designer</b></i> on the team, I worked on 4 levels to <i><b>convey emotions and teach mechanics</b></i>. I sketched ideas for different mechanics and puzzles to get feedback on before implementing prototypes in Unity. I <i><b>documented my design intent</b></i> in detail with annotated screenshots and commented playthrough videos.</p>

  <p><b>Timeline:</b> Jun - Sep 2023 (Level Design Contractor)</p>

  <p><b>Tools:</b> Figma, Unity, Git/Github, Visual Studio Code (C#)</p>

  <p>Please email me [rayhsiaodev at gmail dot com] for an NDA pass to see <a href="https://raddishradish.itch.io/summer23-contract">my work</a>. (I have received approval from my employers to share those work samples under password protection.)</p>
</span>

const GoldLiningAlt = "The purple Sondering Studio logomark on a white background"

const ScribbleRushSpan =
<span>
  A party game that has you draw a growingly complex character in thirty seconds, developed with a team of 4. After finishing a drawing, the player can check out a gallery to see what other people drew!

  <p>Our goal was to make a silly, lighthearted game. I designed simple UI layouts with a playful, hand-drawn vibe and developed an <a href="https://davidmathlogic.com/colorblind/#%23DC267F-%23FF6000-%23FFB000-%2343B368-%23527EF1-%235A3FE0-%23FFFFFF-%238C8C8C-%23000000">accessible color palette</a>.</p>

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

  <p>I needed to make sure all aspects of development aligned with the overall creative vision. For example, the original color scheme was very bright and saturated, giving off the impression of a happy forest, so I asked the art team to darken and desaturate the colors for a darker mood. To further push the idea that catching bugs is "fixing" the world, I decided that the music should transition from sounding "glitchy" to "pure" as the player catches more bugs.</p>
  
  <p>One of my team members told me the project was the most fun they had all school year, and a subset of the team was excited enough about the project that they wanted to polish it up more the following summer!</p>

  <p><b>Timeline:</b> Jan - May 2022 (main development), Jun - Sep 2022 (QOL updates)</p>

  <p><b>Tools:</b> Unity 2D, Visual Studio Code (C#), Git/Github, Adobe Photoshop</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/debugger">itch.io</a> and check out the <a href="https://github.com/rh5140/srs-team-bug">GitHub repo</a>!</p>
</span>

const FlytrapAlt = "The graphic has a black background and the text TEAM BUG in a red pixel font, with TEAM above BUG. The BUG is part of the word DEBUGGER, the rest of which is in white. On top of the letter E sits a cloaked Venus Flytrap character. The red text below says CATCH BUGS TO FIX BUGS."

const PlateSpan =
<span>
  A board game drawn from my own experiences as a student struggling to balance everything I need to do and entering a positive feedback loop of feeling more and more overwhelmed and stressed.  Players accumulate tokens on their character piece's plate and are punished for losing tokens by gaining more stress tokens. Sometimes, I actively choose to make tradeoffs (such as choosing to work on this project instead of picking up my medication), but other times, it feels like my mental state prevents me from making the choice I want (like when I feel too stressed to eat). To communicate this, some cards provide the player a choice while others have their effects determined by the player's number of tokens. Player points are determined by the number of tokens they have, but players must attempt a final challenge of placing their pieces on a springy step before the game concludes, which is meant to punish players who have too much on their plate.

  <p>This project was developed for <a href="https://classes.dma.ucla.edu/Winter24/157/">Design | Media Arts 157: Game Design</a> at UCLA, taught by Sam Malabre.</p>

  <p>I fabricated all of the physical elements of the projects. I spent a lot of time building staircases, painting, and making the paper spring for the middle platform.</p>
  
  <p><b>Timeline:</b> February - March 2024 (3 weeks)</p>

  <p><b>Tools:</b> Adobe Illustrator, Adobe InDesign, laser cutter, wood, cardboard, Crayola Model Magic clay, watercolor & acrylic paint</p>

  <p>Class documentation page TBD.</p>
</span>

const PlateAlt = "This gif swaps between several photos of a board game. This board game is made up of 4 staircases, colored red, blue, yellow, and green, that converge to a white platform. The character pieces placed on the staircase are students carrying plates, and there are clay tokens of different shapes on their plates."

const NebulosusSpan =
<span>
  A VR experience in which you explore a dreamy world full of sleeping animals, developed solo. Keep a respectful distance from the animals -- they'll vanish into clouds if you get too close!

  <p>This project was developed for <a href="https://classes.dma.ucla.edu/Winter24/172/">Design | Media Arts 172: Virtual Reality and Worldbuilding</a> at UCLA, taught by Jenna Caravello.</p>

  <p>This was my first time working in 3D, and my first time working in VR. I designed, drew, and modeled everything in the world. I used Unity's Terrain system to raise/lower the terrain, change the terrain textures, and paint on grass and trees. <a href="https://www.linkedin.com/in/alvin-liu-b183b31b9">Alvin Liu</a>, my friend and creative collaborator, provided the music for my project.</p>
  
  <p><b>Timeline:</b> Jan - March 2024 (10 weeks)</p>

  <p><b>Tools:</b> Unity 3D, Visual Studio Code (C#), Git/Github, MediBang Paint, Blender</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/nebulosus-reverie">itch.io</a> and check out the <a href="https://github.com/rh5140/DMA-172">GitHub repo</a>! The project is configured for HTC Vive and Oculus, but I also uploaded WebGL, Windows, and Mac builds using a first-person controller to make the project more accessible.</p>
</span>

const NebulosusAlt = "This gif moves around in a pink, cloudy world. There is a blob-shaped tree 3D model and a 2D animation of a sleeping leopard on a cloud. As the camera moves closer to the leopard, it becomes startled, changing its animation to be alert and clouds forming around its spots. The camera moves away from the leopard."

const FizzBuzzSpan =
<span>
  A character with abilities designed for a group board game.

  <p>This project was developed for <a href="https://classes.dma.ucla.edu/Winter24/157/">Design | Media Arts 157: Game Design</a> at UCLA, taught by Sam Malabre.</p>

  <p>This gecko thinks he's gifted with magical powers. Nobody has the heart to tell him the truth of his mundanity, so they play along with his antics. When Fizz Buzz falls below an energy threshold, he loses his wizard hat, and with it, the ability to cast spells (wizard cards). Fizz Buzz's spell cost can be decreased if there are character adjacent to him (believers) helping to convince him of his wizardry. The energy, believer, and threshold tokens are placed on the character sheet to track their respective quantities. The wizard hat can be removed from the character piece to show that Fizz Buzz can't cast spells.</p>
  
  <p><b>Timeline:</b> January - February 2024 (3 weeks)</p>

  <p><b>Tools:</b> Adobe Illustrator, laser cutter, wood, watercolor</p>

  <p>Class documentation page TBD.</p>
</span>

const FizzBuzzAlt = "This gif swaps between several photos. They include a wooden character piece of a yellow gecko sitting on a tree wearing a purple wizard hat. The gecko, dubbed Fizz Buzz the Wizard Lizard, has an associated character card and character information sheet, along with cards and tracker tokens."

const SMLevelSpan =
<span>
  A 2D platformer level designed to teach the player how to wall jump, inspired by Super Mario and developed solo. Platforms/walls/floor are grey and lava (which kills the player) is red. The player is the white square at the beginning, and the goal is to reach the yellow square at the end.

  <p>(1) The player learns to wall jump through repetition of the same motion across shortening platforms.</p>

  <p>(2) The player is encouraged to utilize their newly-acquired wall jump knowledge to take the safer path up top rather than risk dying to lava.</p>

  <p>(3) The player can practice wall jumping safely before taking on the final challenge.</p>

  <p><b>Timeline:</b> Jun 2022 (1 week)</p>

  <p><b>Tools:</b> Adobe Photoshop</p>
  
  <p>Read more about my process <a href="https://docs.google.com/document/d/1wQE0oKLY2pD6mjGFL4YD9SzvaCnPj3llYlxRQ9mjwGk/edit">here</a>!</p>


  {/* <p>Read more about my process <a href="https://rh5140.github.io/supermariolevel">here</a> (in progress)</p> */}
</span>

const SMLevelAlt = "A platformer level design with grey solid tiles and red lava tiles."

const GrabbSpan =
<span>
  A 2D aim-and-shoot game featuring a hungry chameleon, developed solo. To win and see a chameleon fun fact, the player must catch and eat 30 bugs in 30 seconds.

  <p>I wanted to try my hand at making a game entirely by myself, so I set a time limit for myself and scoped a simple game accordingly.  Like a real chameleon, the player must wait for the tongue to retract entirely before trying to catch a bug again, which adds friction to the gameplay. To match the frenetic gameplay, I composed a simple melody that speeds up as the time limit approaches.</p>

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
      <InfoCard image={PlateGif} alt={PlateAlt} text={PlateSpan} title="Much on My Plate"></InfoCard>
      <p></p>
      <InfoCard image={NebulosusGif} alt={NebulosusAlt} text={NebulosusSpan} title="Nebulosus Reverie"></InfoCard>
      <p></p>
      <InfoCard image={FizzBuzzGif} alt={FizzBuzzAlt} text={FizzBuzzSpan} title="Fizz Buzz the Wizard Lizard"></InfoCard>
      <p></p>
      <InfoCard image={SMLevelDesign} alt={SMLevelAlt} text={SMLevelSpan} title="Super Mario Level Design"></InfoCard>
      <p></p>
      <InfoCard image={GrabbScreenshot} alt={GrabbAlt} text={GrabbSpan} title="Grabb Grab Grub!!"></InfoCard>
    </Layout>
  )
}
export default GamedevPage