import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import RaybladesGif from '../images/174a.gif'
import CorgoGif from '../images/174c.gif'
import FizzBuzzGif from '../images/FizzBuzz.gif'
import NebulosusGif from '../images/nebulosus.gif'
import PkmnGif from '../images/pkmn_art.gif'
import PlateGif from '../images/Plate.gif'
import RaddishGif from '../images/radish_crop.gif'

const NebulosusSpan =
<span>
  A VR experience in which you explore a dreamy world full of sleeping animals, developed solo with music by <a href="https://www.linkedin.com/in/alvin-liu-b183b31b9">Alvin Liu</a>, my friend and creative collaborator. This project was developed for <a href="https://classes.dma.ucla.edu/Winter24/172/">Design | Media Arts 172: Virtual Reality and Worldbuilding</a> at UCLA, taught by Professor Jenna Caravello and TA Antigoni Tsagkaropoulou.
  
  <p><b>Timeline:</b> Jan - March 2024 (10 weeks)</p>

  <p><b>Tools:</b> Unity 3D, Visual Studio Code (C#), Git/Github, MediBang Paint, Blender, Figma</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/nebulosus-reverie">itch.io</a> and check out the <a href="https://github.com/rh5140/DMA-172">GitHub repo</a>! The project is configured for HTC Vive and Oculus, but I also uploaded WebGL, Windows, and Mac builds using a first-person controller to make the project more accessible.</p>
</span>

const NebulosusAlt = "This gif moves around in a pink, cloudy world. There is a blob-shaped tree 3D model and a 2D animation of a sleeping leopard on a cloud. As the camera moves closer to the leopard, it becomes startled, changing its animation to be alert and clouds forming around its spots. The camera moves away from the leopard."

const FizzBuzzSpan =
<span>
  A character with abilities designed for a group board game, developed solo for <a href="https://classes.dma.ucla.edu/Winter24/157/">Design | Media Arts 157: Game Design</a> at UCLA, taught by Professor Sam Malabre and TA TJ Shin.

  <p>This gecko thinks he's gifted with magical powers. Nobody has the heart to tell him the truth of his mundanity, so they play along with his antics. When Fizz Buzz falls below an energy threshold, he loses his wizard hat, and with it, the ability to cast spells (wizard cards). Fizz Buzz's spell cost can be decreased if there are character adjacent to him (believers) helping to convince him of his wizardry. The energy, believer, and threshold tokens are placed on the character sheet to track their respective quantities. The wizard hat can be removed from the character piece to show that Fizz Buzz can't cast spells.</p>
  
  <p><b>Timeline:</b> January - February 2024 (3 weeks)</p>

  <p><b>Tools:</b> Adobe Illustrator, physical fabrication techniques (laser cut, glued, and painted wood)</p>

  <p><a href="https://classes.dma.ucla.edu/Winter24/157/?page_id=11355&projectID=20">Class documentation page</a>.</p>
</span>

const FizzBuzzAlt = "This gif swaps between several photos. They include a wooden character piece of a yellow gecko sitting on a tree wearing a purple wizard hat. The gecko, dubbed Fizz Buzz the Wizard Lizard, has an associated character card and character information sheet, along with cards and tracker tokens."

const ArtSpan =
<span>
    I have fun making art that I post under <b>radishark art</b> (Instagram:<a href="https://www.instagram.com/radishark_art">@radishark_art</a>, previously @raddishradish). I post pretty sporadically, but I mostly create fanart in the form of digital illustration. More recently, I've been trying to do simple animations and also molding air dry clay!
  
    <p><b>Timeline:</b> December 2018 - present</p>

    <p><b>Tools:</b> Adobe Photoshop or MediBang Paint for digital illustration</p>
</span>

const ArtAlt = "A gif that swaps between three frames. The first frame is a digital illustration of an Alolan Exeggutor designed as a Monster Hunter monster, formatted like a page out of a book. The second is a digital painting of a Flareon curled around a Torchic, sleeping on a pile of blankets. There is a heart made of fire above them. The final frame contains 3 digital drawings in a polygonal style. The one on the left is a shiny Rayquaza on a black background. The one on the top right is a Krokorok with sunglasses, arms crossed under the desert sun. The one on the bottom right is an Empoleon pointing at the viewer with a wing, with a background of geometric ice shapes."

const RaybladesSpan = 
<span>
  This Beyblades simulation was developed for Computer Science 174A: Introduction to Computer Graphics, taught by Professor Ashish Law and TA Chenda Duan, with two other students.

  <p><b>Timeline:</b> March 2023 (2.5 weeks)</p>

  <p><b>Tools:</b> JavaScript, WebGL, <a href="https://github.com/niyantn/tiny-graphics-js">tiny-graphics.js</a></p>

  <p>Run it in your browser on this <a href="https://rh5140.github.io/174a-beyblades/">webpage</a> (sound on!) and check out the <a href="https://github.com/rh5140/174a-beyblades">GitHub repo</a>!</p>
</span>

const RaybladesAlt = "A gif of two Beyblades spinning around on a marble platform with a background of spinning fire."

const CorgoSpan = 
<span>
  This animation was developed for Computer Science 174C: Computer Animation, taught by Professor Demetri Terzopoulos and TA Zhi Li, with three other students.

  <p><b>Timeline:</b> February - March 2024 (5 weeks)</p>

  <p><b>Tools:</b> JavaScript, WebGL, <a href="https://github.com/niyantn/tiny-graphics-js">tiny-graphics.js</a></p>

  <p>Run it in your browser on this <a href="https://rh5140.github.io/174c-corgo/">webpage</a> (sound on!) and check out the <a href="https://github.com/rh5140/174c-corgo">GitHub repo</a>! The README has a breakdown of who did what work in the project.</p>
</span>

const CorgoAlt = "A gif of a frog jumping on a mushroom in an environment of red mushrooms and frogs. It zooms in on the frog, then zooms out to see a corgi is running circles around the frog."

const RaddishSpan =
<span>
  This clicker game was developed as our extra feature for Computer Science 130: Software Engineering, with three other students. This version I have online is mostly meant to demonstrate my contributions to the frontend and is disconnected from the backend. I designed the game elements, designed and implemented the webpage, and drew the art assets.

  <p><b>Timeline:</b> May - June 2024 (1.5 weeks)</p>

  <p><b>Tools:</b> JavaScript, HTML/CSS, MediBang Paint</p>

  <p>Run it in your browser on this <a href="https://rh5140.github.io/raddish/">webpage</a>. The frontend display branch can be seen here <a href="https://github.com/rh5140/raddish/tree/frontend-display">on GitHub</a>.</p>
</span>

const RaddishAlt = "A gif of a clicker game featuring a large radish to click on. The buyable upgrades include cat farmer, farmer, taffy, Charlie the parrot, almond, lobster, and Powell cat."

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


const MiscPage = () => {
  return (
    <Layout pageTitle="Miscellaneous">
      <p></p>
      <InfoCard image={RaddishGif} alt={RaddishAlt} text={RaddishSpan} title="raddish clicker!"></InfoCard>
      <p></p>
      <InfoCard image={FizzBuzzGif} alt={FizzBuzzAlt} text={FizzBuzzSpan} title="Fizz Buzz the Wizard Lizard"></InfoCard>
      <p></p>
      <InfoCard image={PlateGif} alt={PlateAlt} text={PlateSpan} title="Much on My Plate"></InfoCard>
      <p></p>
      <InfoCard image={NebulosusGif} alt={NebulosusAlt} text={NebulosusSpan} title="Nebulosus Reverie"></InfoCard>
      <p></p>
      <InfoCard image={CorgoGif} alt={CorgoAlt} text={CorgoSpan} title="Corgo in Wonderland"></InfoCard>
      <p></p>
      <InfoCard image={RaybladesGif} alt={RaybladesAlt} text={RaybladesSpan} title="Beyblades"></InfoCard>
      <p></p>
      <InfoCard image={PkmnGif} alt={ArtAlt} text={ArtSpan} title="radishark art"></InfoCard>
    </Layout>
  )
}
export default MiscPage