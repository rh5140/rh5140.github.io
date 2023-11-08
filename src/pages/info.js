import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PFP from '../images/PFP.jpg'

// Not sure if this is good practice :(
// from https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
const stringSpan = 
<span> 
  I'm Ray Hsiao (pronounced like "shout" without the "t"). In summer 2023, I contracted as a level designer at <a href="https://sonderingstudio.com/">Sondering Studio</a>. I currently study computer science at <a href="https://ucla.edu/">UCLA</a> (graduating June 2024), 
    where I'm the co-president emeritus for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>, UCLA's student-run game development club.

  <p>I'm inspired to make games because of how interactivity enables the creation of experiences exclusive to the medium. I'm specifically interested in making games that are coherent experiences, in which all aspects of the game, from mechanics to visual design to narrative, align towards a common goal.</p>

  <p>Games I've enjoyed playing recently include Katamari Damacy, Loop Hero, Venba, and Persona 5 Royal.</p>

  <p>Outside of games, some other things I like include drawing, singing and playing viola, observing and photographing animals, and reading.</p>

</span>

const InfoPage = () => {
  return (
    <Layout pageTitle="About me">
      <InfoCard image={PFP} alt="Smiling Asian person with long hair, glasses, and pink puffer jacket against a background of trees reflected in water." text={stringSpan} title="Hello!"></InfoCard>
    </Layout>
  )
}
export default InfoPage