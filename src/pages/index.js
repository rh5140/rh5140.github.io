import * as React from 'react'
import Layout from '../components/layout'
import InfoCard from '../components/info-card'

const IndexPage = () => {
  return (
    <Layout pageTitle="About">
      {/* <p>I'm Ray Hsiao (any pronouns), a second year computer science student at <a href="https://ucla.edu/">UCLA</a>, 
      where I'm an officer for <a href="https://www.uclaacm.com/committees#studio/">ACM Game Studio</a>  and violist in the <a href="http://gmeatucla.com/">Game Music Ensemble</a>.</p> */}
      <InfoCard></InfoCard>
    </Layout>
  )
}
export default IndexPage