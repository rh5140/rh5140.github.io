import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
import PFP from '../images/PFP.jpg'

// Not sure if this is good practice :(
// from https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
const stringSpan = 
<span> 
  I'm Ray Hsiao (pronounced like "shout" without the "t"). In summer 2023, I contracted as a level designer at <a href="https://sonderingstudio.com/">Sondering Studio</a>. I currently study computer science at <a href="https://ucla.edu/">UCLA</a> (graduating June 2024), 
    where I'm the co-president emeritus for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>, UCLA's student-run game development club,
    and violist (and occasional choir member) in the <a href="http://gmeatucla.com/">Game Music Ensemble</a>.

  <p>Some other things I like include distance running, long walks, observing and photographing animals, reading, and getting lost on campus.</p>

</span>

const InfoPage = () => {
  return (
    <Layout pageTitle="About">
      <InfoCard image={PFP} alt="Smiling Asian person with long hair, glasses, and pink puffer jacket against a background of trees reflected in water." text={stringSpan} title="Hello!"></InfoCard>
    </Layout>
  )
}
export default InfoPage