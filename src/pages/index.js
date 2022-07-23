import * as React from 'react'
import Layout from '../components/layout'
import InfoCard from '../components/info-card'
import PFP from '../images/PFP.jpg'

// Not sure if this is good practice :(
// from https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
const stringSpan = 
<span> 
  I'm Ray Hsiao (pronounced like "shout" without the "t"). I study computer science and digital humanities at <a href="https://ucla.edu/">UCLA</a> (class of 2024), 
    where I'm the co-president for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>, UCLA's student-run game development club,
     and violist in the <a href="http://gmeatucla.com/">Game Music Ensemble</a>.

  <p>Besides video games, I'm interested in exploring other areas where I can reconcile the technical skills I gain pursuing my degree with my longstanding interest in art and other creative forms of expression!</p>

  <p>Some other things I like include distance running, long walks, observing and photographing animals, reading, and getting lost on campus.</p>

</span>

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <InfoCard image={PFP} alt="Smiling Asian person with long hair, glasses, and pink puffer jacket against a background of trees reflected in water." text={stringSpan} title="Hello!"></InfoCard>
    </Layout>
  )
}
export default IndexPage