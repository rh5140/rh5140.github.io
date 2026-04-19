import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
// import PFP from '../images/Ray_ATE.jpg'
import PFP from '../images/SelfPortrait.gif'

// Not sure if this is good practice :(
// from https://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
const stringSpan = 
<span> 
  I'm <b>Ray Hsiao</b> (pronounced like "shout" without the "t"), a <b>technical game designer</b> with experience in <b>engineering</b> and <b>production</b>.

  <h2>Education</h2>
  <ul>
    <li>M.S. in Game Science and Design, <a href="https://camd.northeastern.edu/programs/game-science-and-design-ms-oakland/" target="_blank">Northeastern University</a> (2025-2027)</li>
    <li>B.S. in Computer Science, <a href="https://www.cs.ucla.edu/" target="_blank">University of California, Los Angeles</a> (2020-2024)</li>

  </ul>

  <h2>Volunteering</h2>
  <ul>
    <li>Community Coordinator, <a href="https://www.linkedin.com/company/magical-in-gaming" target="_blank">MAGICAL in Gaming</a> (2026-present)</li>
    <li>PR Officer, <a href="https://sgda.io/" target="_blank">SGDA (Student Games Developers' Alliance)</a> (2025-present)</li>
    <li>Mascot Designer & Speaker, <a href="https://www.linkedin.com/company/magical-in-gaming" target="_blank">MAGICAL in Gaming</a> (2025)</li>
    <li>Conference Associate, <a href="https://gdconf.com/" target="_blank">Game Developers Conference</a> (2022, 2024)</li>
    <li>Game Development Club President, <a href="https://studio.uclaacm.com/" target="_blank">ACM Studio at UCLA</a> (2022-2023)</li>
  </ul>

  <h2>Links</h2>
  <ul>
    <li>Email: <a href="rayhsiaodev@gmail.com" target="_blank">rayhsiaodev@gmail.com</a></li>
    <li>LinkedIn: <a href="https://www.linkedin.com/in/rayhsiao" target="_blank">linkedin.com/in/rayhsiao</a></li>
    <li>GitHub: <a href="https://github.com/rh5140" target="_blank">github.com/rh5140</a></li>
    <li>Itch.io: <a href="https://raddishradish.itch.io/" target="_blank">raddishradish.itch.io</a></li>
  </ul>

  <h2>Currently playing</h2>
  <p><i>Teamfight Tactics</i> (peak rank Master), <i>Arknights</i>, <i>Sorry We're Closed</i>, <i>Cabernet</i></p>

</span>

const InfoPage = () => {
  return (
    <Layout pageTitle="About Me">
      <InfoCard image={PFP} alt="Black and white 2-frame GIF of a smiling Asian person surrounded by video games, music, art, comics, level design, typing, a book, a cat, and the text SOMETHING NEW." text={stringSpan} title="Hello!"></InfoCard>
    </Layout>
  )
}
export default InfoPage