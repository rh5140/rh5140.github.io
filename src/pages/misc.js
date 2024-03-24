import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import FizzBuzzGif from '../images/FizzBuzz.gif'
import NebulosusGif from '../images/nebulosus.gif'
import PkmnGif from '../images/pkmn_art.gif'

const NebulosusSpan =
<span>
  A VR experience in which you explore a dreamy world full of sleeping animals, developed solo. Keep a respectful distance from the animals -- they'll vanish into clouds if you get too close!

  <p>This project was developed for <a href="https://classes.dma.ucla.edu/Winter24/172/">Design | Media Arts 172: Virtual Reality and Worldbuilding</a> at UCLA, taught by Jenna Caravello.</p>

  <p>This was my first time working in 3D, and my first time working in VR. I designed, drew, and modeled everything in the world. I used Unity's Terrain system to raise/lower the terrain, change the terrain textures, and paint on grass and trees. <a href="https://www.linkedin.com/in/alvin-liu-b183b31b9">Alvin Liu</a>, my friend and creative collaborator, provided the music for my project.</p>
  
  <p><b>Timeline:</b> Jan - March 2024 (10 weeks)</p>

  <p><b>Tools:</b> Unity 3D, Visual Studio Code (C#), Git/Github, MediBang Paint, Blender, Figma</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/nebulosus-reverie">itch.io</a> and check out the <a href="https://github.com/rh5140/DMA-172">GitHub repo</a>! The project is configured for HTC Vive and Oculus, but I also uploaded WebGL, Windows, and Mac builds using a first-person controller to make the project more accessible.</p>
</span>

const NebulosusAlt = "This gif moves around in a pink, cloudy world. There is a blob-shaped tree 3D model and a 2D animation of a sleeping leopard on a cloud. As the camera moves closer to the leopard, it becomes startled, changing its animation to be alert and clouds forming around its spots. The camera moves away from the leopard."

const FizzBuzzSpan =
<span>
  A character with abilities designed for a group board game.

  <p>This project was developed for <a href="https://classes.dma.ucla.edu/Winter24/157/">Design | Media Arts 157: Game Design</a> at UCLA, taught by Sam Malabre.</p>

  <p>This gecko thinks he's gifted with magical powers. Nobody has the heart to tell him the truth of his mundanity, so they play along with his antics. When Fizz Buzz falls below an energy threshold, he loses his wizard hat, and with it, the ability to cast spells (wizard cards). Fizz Buzz's spell cost can be decreased if there are character adjacent to him (believers) helping to convince him of his wizardry. The energy, believer, and threshold tokens are placed on the character sheet to track their respective quantities. The wizard hat can be removed from the character piece to show that Fizz Buzz can't cast spells.</p>
  
  <p><b>Timeline:</b> January - February 2024 (3 weeks)</p>

  <p><b>Tools:</b> Adobe Illustrator, physical fabrication techniques (laser cut, glued, and painted wood)</p>

  <p>Class documentation page will be linked here once available.</p>
</span>

const FizzBuzzAlt = "This gif swaps between several photos. They include a wooden character piece of a yellow gecko sitting on a tree wearing a purple wizard hat. The gecko, dubbed Fizz Buzz the Wizard Lizard, has an associated character card and character information sheet, along with cards and tracker tokens."

const ArtSpan =
<span>
    I have fun making art that I post under <b>radishark art</b> (Instagram:<a href="https://www.instagram.com/radishark_art">@radishark_art</a>, previously @raddishradish). I post pretty sporadically, but I mostly create fanart in the form of digital illustration. More recently, I've been trying to do simple animations and also molding air dry clay!
  
    <p><b>Timeline:</b> December 2018 - present</p>

    <p><b>Tools:</b> Adobe Photoshop or MediBang Paint for digital illustration</p>
</span>

const ArtAlt = "A gif that swaps between three frames. The first frame is a digital illustration of an Alolan Exeggutor designed as a Monster Hunter monster, formatted like a page out of a book. The second is a digital painting of a Flareon curled around a Torchic, sleeping on a pile of blankets. There is a heart made of fire above them. The final frame contains 3 digital drawings in a polygonal style. The one on the left is a shiny Rayquaza on a black background. The one on the top right is a Krokorok with sunglasses, arms crossed under the desert sun. The one on the bottom right is an Empoleon pointing at the viewer with a wing, with a background of geometric ice shapes."

const MiscPage = () => {
  return (
    <Layout pageTitle="Miscellaneous">
      <p>Here's some other stuff I've done and want to share!</p>
      <p></p>
      <InfoCard image={FizzBuzzGif} alt={FizzBuzzAlt} text={FizzBuzzSpan} title="Fizz Buzz the Wizard Lizard"></InfoCard>
      <p></p>
      <InfoCard image={PkmnGif} alt={ArtAlt} text={ArtSpan} title="radishark art"></InfoCard>
      <p></p>
      <InfoCard image={NebulosusGif} alt={NebulosusAlt} text={NebulosusSpan} title="Nebulosus Reverie"></InfoCard>
    </Layout>
  )
}
export default MiscPage