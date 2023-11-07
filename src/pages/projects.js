import * as React from 'react'
import InfoCard from '../components/info-card'
import Layout from '../components/layout'
// import wen2eatScreenshot from '../images/wen2eatScreenshot.jpg'
// import wen2eatFigma from '../images/wen2eatFigma.jpg'
// import TenantsWireframe from '../images/TenantsWireframe.jpg'

const TenantsScreenshot = "https://user-images.githubusercontent.com/40257341/121583382-07c55a00-c9e5-11eb-8e38-63309b61b18a.png"

const WebsiteAlt = "(=^･ω･^=) no image necessary since you're looking at it (=^･ｪ･^=))ﾉ彡☆"
const WebsiteSpan =
<span>
  My personal website built for fun using <a href="https://www.gatsbyjs.com/">Gatsby framework</a>, to be updated periodically. Not yet optimized for mobile.
  <p>The site is currently accessible at <a href="https://rh5140.github.io">rh5140.github.io</a> or <a href="https://rayhsiao.gatsbyjs.io">rayhsiao.gatsbyjs.io</a> and the source code can be found on the <a href="https://github.com/rh5140/rh5140.github.io">GitHub repo</a>. </p>
</span>

const wen2eatSpan = 
<span>
  A web app that recommends recipes based on a list of the user's ingredients developed in a team of five as a final project for <a href="https://web.cs.ucla.edu/classes/fall21/cs35L/index.html">CS 35L Fall 2021</a>.
  <p>I <a href="https://rh5140.github.io/static/wen2eatFigma-7d966bc186102d03381adc3cac60871b.jpg">prototyped the website in Figma</a>, developed the color scheme, and designed the logo based on the Chinese character 文 (wén) and a dining table. For the actual site, I worked on miscellaneous CSS styling.</p>
  <p> 
    {/* <img src={wen2eatFigma} alt="Website laid out in Figma"></img> */}
  </p>
  <p>Follow the instructions on the README of the <a href="https://github.com/edmondywen/wen2eat">GitHub repo</a> to run.</p>
</span>
const wen2eatAlt = "Screenshot of wen2eat website. The top of the website has the wen2eat logo, the text 'hey, are you wondering what to make & wen2eat?' and a beige Logout button. A smaller left column represents the Pantry with cheese and milk. The larger right column has a list of recipe recommendations based on those ingredients."

const TenantsSpan = 
<span>
  An interactive map where community members can share their experiences with and knowledge regarding tenants' rights developed in a team of three as a final project for <a href="https://github.com/albertkun/21S-ASIAAM-191A/">Asia Am 191A Spring 2021</a>.
  Made using HTML, CSS, JavaScript, and the Leaflet library. Inactive prototype and unusable due to Google Sheets deprecating their API.
  <p>I sketched the <a href="https://rh5140.github.io/static/TenantsWireframe-67e91e84b897d9993eb72842c8d768d4.jpg">website wireframe</a> to have a landing page with language select options so users can choose the language they're most comfortable with rather than establishing English as the default. 
    I implemented the clickable tabs and populated them with survey results in the final website (shown to the left).
  </p>
  {/* <p><img src={TenantsWireframe} alt="Sketch of landing page with language select options and a main site with a map."></img></p> */}
  <p>While our project was never completed, you can see the source code and our vision for the project on the <a href="https://github.com/skarakas1/Tenants-Rights-Mapping-Project">GitHub repo</a>.</p>
</span>
const TenantsAlt = "Screenshot of Tenants' Rights Mapping Project website, which has a navbar with 'Survey', 'Language', and 'Github Documentation'. The body of the website has a map with two zip codes in LA county outlined in orange and Community solutions to the right."

const StarAlt = "Screenshot of website with black background and scattered stars. The text on top reads 'This site is inspired by the games Night in the Wood and The Space in Between. Wander around to learn more about the site's creator!' followed by 'This was made for the Fall 2020 Bloom Fellowship. As one does, I attended only the first workshop and crammed all of the contented I missed in one day. I probably could have made something better if I spread things out WHOOPS.'"
const StarSpan =
<span>
  An interactive site built with HTML and CSS for <a href="https://bloom-fellowship-projects.devpost.com/">UCLA Bloom Fellowship</a> in Fall 2021 in approximately one day.

  <p>My first foray into web development, in which I completely avoided learning JavaScript! There are lots of problems with the site, such as the fact that it's not responsive at all and all the position is absolute.
    I drew the constellations in MediBang Paint. You can see that I am consistently a fan of black/white/blue considering that's the color palette of this site you're on right now!
  </p>

  <p>Check out the <a href="https://rh5140.github.io/star-site/">site</a> and <a href="https://devpost.com/software/star-site">DevPost</a>.</p>
</span>

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Other projects">
      <p>Sometimes I work on stuff other than games.</p>
      <InfoCard alt={WebsiteAlt} text={WebsiteSpan} title={"Ray Hsiao's website"}></InfoCard>
      <p></p>
      <InfoCard image="https://rh5140.github.io/static/wen2eatScreenshot-cf3d0cebbb15333235aa18418abbfa39.jpg" alt={wen2eatAlt} text={wen2eatSpan} title="wen2eat"></InfoCard>
      <p></p>
      <InfoCard image={TenantsScreenshot} alt={TenantsAlt} text={TenantsSpan} title="Tenants' Rights Mapping Project"></InfoCard>
      <p></p>
      <InfoCard image="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/300/937/datas/original.png" alt={StarAlt} text={StarSpan} title="Star Site"></InfoCard>
    </Layout>
  )
}
export default ProjectsPage