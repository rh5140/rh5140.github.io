import * as React from 'react'
import Layout from '../components/layout'
import InfoCard from '../components/info-card'
import GrabbScreenshot from '../images/GrabbScreenshot.png'

const stringSpan = 
<span>
  <p>An aim-and-shoot game developed solo in about two weeks using Unity game engine.</p>

  <p>I wrote the scripts in C#, drew the art in Adobe PhotoShop, and composed <a href="https://musescore.com/user/39562343/scores/7325780/s/kd3eSL">main menu</a> and <a href="https://musescore.com/user/39562343/scores/7325804/s/s3T9Qs">background</a> music in MuseScore.</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/grabb-grab-grub">itch.io</a> and check out the <a href="https://github.com/rh5140/chameleon-game">GitHub repo</a>!</p>
</span>

const GamedevPage = () => {
  return (
    <Layout pageTitle="Game development">
      <p>Check out all the games I've worked on my <a href="https://raddishradish.itch.io/">itch.io</a> (raddishradish)!</p>
      <InfoCard image={GrabbScreenshot} text={stringSpan} title="Grabb Grab Grub!!"></InfoCard>
    </Layout>
  )
}
export default GamedevPage