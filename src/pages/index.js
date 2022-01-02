import * as React from 'react'
import Layout from '../components/layout'
import InfoCard from '../components/info-card'
import PFP from '../images/PFP.jpg'

// Not sure if this is good practice :(
// from https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
const stringSpan = 
<span> 
  <p>I'm Ray Hsiao (any pronouns), a second year computer science student at <a href="https://ucla.edu/">UCLA</a>, 
    where I'm an officer for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>  and violist in the <a href="http://gmeatucla.com/">Game Music Ensemble</a>.</p>


</span>

const cardTitle = "Hello!"

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      <InfoCard image={PFP} text={stringSpan} title={cardTitle}></InfoCard>
    </Layout>
  )
}
export default IndexPage