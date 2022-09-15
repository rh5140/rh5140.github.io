import * as React from 'react'
import Layout from '../components/layout'
import InfoCard from '../components/info-card'
import GrabbScreenshot from '../images/GrabbScreenshot.png'
import Flytrap from '../images/DebuggerTItle.png'

const DebuggerSpan = 
<span>
  A 2D puzzle game currently in development. The demo was developed with a team of 12 for ACM Game Studio at UCLA's Students Run Studios program, in which student developers work collaboratively on a game throughout the winter and spring quarters.

  <p>This game is inspired by a joke my friend made about how it makes sense that I'm a computer science major if I like bugs (referring to the animals). In this game, the player captures bugs (animals) to fix "bugs" (intentional game mechanic errors).</p>

  <p>I act as a producer to lead, direct, manage, and motivate developers across multiple disciplines and organize them through Discord and GitHub. Over winter and spring, I held weekly meetings to check in with the entire team and overall team progress and 
    also checked for updates throughout the week. I assigned issues to programmers and playtested and gave feedback reviewing their pull requests. I imported art assets and implemented character animations and speaker sprites in the dialogue boxes.
  </p>

  <p>Play the demo on <a href="https://raddishradish.itch.io/debugger-srs">itch.io</a> and check out the <a href="https://github.com/rh5140/srs-team-bug">GitHub repo</a>!</p>
</span>

const FlytrapAlt = "The graphic has a black background and the text TEAM BUG in a red pixel font, with TEAM above BUG. The BUG is part of the word DEBUGGER, the rest of which is in white. On top of the letter E sits a cloaked Venus Flytrap character. The red text below says CATCH BUGS TO FIX BUGS."
// const FlytrapAlt = "Simple drawing of a figure in a hooded blue cloak. The figure is inspired by a Venus flytrap and has a Venus flytrap head and two little feet. The background is filled with red 1s and 0s."

const GrabbSpan = 
<span>
  An aim-and-shoot game developed solo in about two weeks over winter break 2021.

  <p>Since I had only worked on games in teams before and primarily on art, I challenged myself to solo making a game so I could familiarize myself with game development more holistically.
    I prototyped and implemented game mechanics and a text parser in C#, illustrated in Adobe Photoshop, and composed <a href="https://musescore.com/user/39562343/scores/7325780/s/kd3eSL">main menu</a> and <a href="https://musescore.com/user/39562343/scores/7325804/s/s3T9Qs">background</a> music in MuseScore.</p>

  <p>Runner-up in <a href="https://github.com/rh5140/chameleon-game">2022 "Science is Art" Competition</a> held by UCLA Science Libraries.</p>

  <p>Play the game on <a href="https://raddishradish.itch.io/grabb-grab-grub">itch.io</a> and check out the <a href="https://github.com/rh5140/chameleon-game">GitHub repo</a>!</p>
</span>

const GrabbAlt = "Screenshot of game with chameleon sitting on a branch with a caught bug on the end of its tongue. There are six other flying bugs on screen, and two concentric pink circles represent the cursor. The top left corner reads 'Time remaining: 00:23' and the top right reads '5 of 30 caught'. The background is a light blue and green watercolor texture."

const BreadySpan = 
<span>
  A boss battle game developed with a team of eight for <a href="https://itch.io/jam/studiosnowjam">ACM Studio Snowjam 2021</a>. Revamp of <a href="https://aaisara12.itch.io/mundaydreaming">mundaydreaming</a>, from which we reused art assets and my <a href="https://musescore.com/user/39562343/scores/7325906/s/HwmVT8">background music</a>.

  <p>I delegated responsibilities and coordinated the artistic side of the game.
     I worked a little bit on the UI layout and drew the toaster boss, bread, miscellaneous art assets used in the UI, and the dialogue box in Adobe Photoshop.
     </p>

  <p>Play the game on <a href="https://aaisara12.itch.io/breadyornot">itch.io</a>!</p>
</span>

const BreadyAlt = "Screenshot of game with man in office attire running and pointing at a toaster creature with four legs. Health bars are displayed below each character, with the man at full health and toaster at approximately 70% health. A computer terminal on the top with the name 'Norman' reads '> First overtime, then welcoming the new year alone, and now *this*!? This millennium is off to a crumby start...' The background is an illustration of an office."

const CrankySpan = 
<span>
  A walking simulator developed with a team of seven for <a href="https://itch.io/c/1740469/reverse-game-jam-summer-2021-less-is-more">ACM Studio Reverse Game Jam</a> during Summer 2021, 
  in which developers took on roles they were unfamiliar with.

  <p>At this point in time, I had only participated in game development as an artist, so I was assigned to be a programmer.
    I did program a basic dialogue manager and text parser in C#, but I ended up primarily taking on the role of the writer and designer,  
    writing all the dialogue in the game and compositing the Unity scenes such that the narrative would flow properly.
  </p>

  <p>Play the game on <a href="https://brandmuffin.itch.io/cranky">itch.io</a>!</p>
</span>

const CrankyAlt = "Three black and white drawings of an old man wearing a newsboy hat, vest over long-sleeve shirt, long pants, loafers, and holding a cane at different frames of a walking animation underneath the title 'Cranky.' on a white background."

// const HeroSpan =
// <span>
//   <p>A dating simulator with combat elements developed with a team of nine as part of ACM Studio's Students Run Studios program from Winter 2020 through Spring 2021.</p>

//   <p>I designed and drew some of the characters and villains. Unfortunately, I must avoid specifics to avoid spoilers.</p>

//   <p>Play the game on <a href="https://zlc122.itch.io/i-need-a-hero-a-super-powered-dating-adventure">itch.io</a>!</p>
// </span>

const SpaceSpan = 
<span>
  A romance visual novel developed with a team of eight under Sondering Studio.

  <p>I joined The Space in Between team from September 2020 to January 2021 to help market the game having no prior marketing experience, especially not for shipping a game. 
    I made the press release (linked in the <a href="https://alanguan98.github.io/The-Space-In-Between/">press kit</a>) and contacted gaming websites and publications, resulting in seven external reviews.
    I created social media graphics and ads for the <a href="https://twitter.com/sonderingstudio">Sondering Studio Twitter account</a>.
    I drew <a href="https://www.webtoons.com/en/challenge/searching-in-between/list?title_no=516556&page=1">Searching in Between</a>, a prequel comic published to WEBTOON canvas, and the bear in the game.
  </p>

  <p>Play the game on <a href="https://store.steampowered.com/app/1430240/The_Space_in_Between/">Steam</a> (PC only) and <a href="https://volcanogirl.itch.io/the-space-in-between">itch.io</a> (any platform)!</p>
</span>

const SpaceAlt = "A long-haired Asian girl looking at a constellation she holds in her hand and a boy facing away stand back to back, with the text 'THE SPACE IN BETWEEN' in pale blue to the left. The background is a painterly illustration of the Northern Lights, heavily featuring the colors pink, blue, and teal."

const RamenSpan = 
<span>
A visual novel developed with a team of six for <a href="https://itch.io/c/1740406/summer-game-jam-2020-past-present-and-future">ACM Studio's Summer Game Jam 2020</a>.

<p>This was the first game I ever worked on, and I enjoyed the collaborative development process so much I committed to joining ACM Studio as a result! 
  I designed two characters and made 25 pixel art pieces (<a href="https://raddishradish.artstation.com/projects/oA9JeJ">highlights here</a>).
  I also thoroughly caught typos and writing mechanics errors in the script.
</p>

<p>Play the game on <a href="https://volcanogirl.itch.io/ramen-for-two">itch.io</a>!</p>
</span>

const RamenAlt = "A pixel drawing of an Asian ramen chef in front of a menu and a table with two blue bowls."

const GamedevPage = () => {
  return (
    <Layout pageTitle="Game development">
      <p>For a comprehensive list of games I've worked on, refer to my <a href="https://raddishradish.itch.io/">itch.io page</a> (raddishradish)!</p>
      <InfoCard image={Flytrap} alt={FlytrapAlt} text={DebuggerSpan} title="Debugger (Demo Available)"></InfoCard>
      <p></p>
      <InfoCard image={GrabbScreenshot} alt={GrabbAlt} text={GrabbSpan} title="Grabb Grab Grub!!"></InfoCard>
      <p></p>
      <InfoCard image="https://img.itch.zone/aW1hZ2UvMTMyMjQ1Ny83NjkwMTM5LnBuZw==/original/g6FMif.png" alt={BreadyAlt} text={BreadySpan} title="Bready or Not!"></InfoCard>
      <p></p>
      <InfoCard image="https://img.itch.zone/aW1nLzY2NDgyNDYucG5n/original/b6Aqmq.png" alt={CrankyAlt} text={CrankySpan} title="Cranky."></InfoCard>
      {/* <p></p>
      <InfoCard image="https://img.itch.zone/aW1nLzYwNjk3NzMuZ2lm/original/kCbXZG.gif" alt="Six colorful characters standing under the text 'I NEED A HERO!'" text={HeroSpan} title="I Need a Hero! A Super-Powered Dating Adventure!"></InfoCard> */}
      <p></p>
      <InfoCard image="https://img.itch.zone/aW1nLzQxNzcyMjcucG5n/original/8%2BcjzL.png" alt={SpaceAlt} text={SpaceSpan} title="The Space in Between"></InfoCard>
      <p></p>
      <InfoCard image="https://img.itch.zone/aW1hZ2UvNzUyNjI0LzQyMDMyNDUucG5n/original/Ut7t4z.png" alt={RamenAlt} text={RamenSpan} title="Ramen for Two"></InfoCard>
    </Layout>
  )
}
export default GamedevPage