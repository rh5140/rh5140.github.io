import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PFP from '../images/Ray_ATE.jpg'

// Not sure if this is good practice :(
// from https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
const stringSpan = 
<span> 
  I'm Ray Hsiao (pronounced like "shout" without the "t"). I graduated in June 2024 with a B.S. in computer science from <a href="https://ucla.edu/">UCLA</a>, 
    where I was co-president for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>, UCLA's student-run game development club, and a <a href="https://games.ucla.edu/people/current">UCLA Game Lab</a> resident.

  <p> In summer 2023, I designed levels for <a href="https://store.steampowered.com/app/3036500/Gold_Lining/">Gold Lining</a>,  <a href="https://sonderingstudio.com/">Sondering Studio</a>'s upcoming game.</p>

  <p>I'm inspired to make games because of how interactivity enables the creation of experiences exclusive to the medium. I'm specifically interested in making games that are coherent experiences, in which all aspects of the game, from mechanics to visual design to narrative, align towards a common goal.</p>

  <p>Games I've enjoyed playing recently include <a href="https://www.slaytheprincess.com/">Slay the Princess</a>, <a href="https://www.blueprincegame.com/">Blue Prince</a>, <a href="https://www.1000xresist.com/">1000xRESIST</a>, and <a href="https://www.capcom-games.com/ghosttrick/">Ghost Trick: Phantom Detective</a>.</p>

  <p>Outside of games, some other things I like include drawing, singing and playing viola, observing and photographing animals, and reading.</p>

  <p>Photography credit: <a href="https://www.instagram.com/galleriadejason">Jason Liu</a></p>

</span>

const InfoPage = () => {
  return (
    <Layout pageTitle="About me">
      <InfoCard image={PFP} alt="Smiling Asian person with long hair, glasses, and pink puffer jacket against a background of trees reflected in water." text={stringSpan} title="Hello!"></InfoCard>
    </Layout>
  )
}
export default InfoPage