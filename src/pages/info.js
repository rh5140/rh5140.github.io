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

  <p>I was inspired to make games because of how interactivity enables the creation of experiences exclusive to the medium, and I keep making them because I love how interdisciplinary and collaborative the process is! I hope to foster connection through crafting compelling and accessible games.</p>

  <p>Outside of games, my interests include drawing, singing along to music, and reading. My animated self-portrait to the left was created for the <a href="https://docs.google.com/presentation/d/1OFWHsRW--GJiwM5zXVqS0-gV9vw52H-A-Zphuq-gjo8/edit?slide=id.g2f60e087a38_0_0#slide=id.g2f60e087a38_0_0" target="_blank">MAGICAL Medium Zine 2024</a>.</p>


  <h2>Education</h2>
  <p>M.S. in Game Science and Design, <a href="https://camd.northeastern.edu/programs/game-science-and-design-ms-oakland/" target="_blank">Northeastern University</a> (2025-2027)</p>
  <p>B.S. in Computer Science, <a href="https://www.cs.ucla.edu/" target="_blank">University of California, Los Angeles</a> (2020-2024)</p>


  <h2>Volunteering</h2>
  <p>Officer, <a href="https://sgda.io/" target="_blank">SGDA (Student Games Developers' Alliance)</a> (2025-present)</p>
  <p>Mascot Designer & Speaker, <a href="https://www.linkedin.com/company/magical-in-gaming" target="_blank">MAGICAL in Gaming</a> (2025)</p>
  <p>Conference Associate, <a href="https://gdconf.com/" target="_blank">Game Developers Conference</a> (2022, 2024)</p>
  <p>Game Development Club President, <a href="https://studio.uclaacm.com/" target="_blank">ACM Studio at UCLA</a> (2022-2023)</p>

  <h2>Links</h2>
  <p>Email: <a href="rayhsiaodev@gmail.com" target="_blank">rayhsiaodev@gmail.com</a></p>
  <p>LinkedIn: <a href="https://www.linkedin.com/in/rayhsiao" target="_blank">linkedin.com/in/rayhsiao</a></p>
  <p>GitHub: <a href="https://github.com/rh5140" target="_blank">github.com/rh5140</a></p>
  <p>Itch.io: <a href="https://raddishradish.itch.io/" target="_blank">raddishradish.itch.io</a></p>

  <h2>Currently playing</h2>
  <p><i>Teamfight Tactics</i>, <i>Arknights</i>, <i>Slay the Princess</i>, <i>Zero Escape</i></p>

</span>

const InfoPage = () => {
  return (
    <Layout pageTitle="About Me">
      <InfoCard image={PFP} alt="Black and white 2-frame GIF of a smiling Asian person surrounded by video games, music, art, comics, level design, typing, a book, a cat, and the text SOMETHING NEW." text={stringSpan} title="Hello!"></InfoCard>
    </Layout>
  )
}
export default InfoPage