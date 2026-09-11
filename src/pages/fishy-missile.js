import * as React from 'react';
import GameInfo from '../components/game-info';
import InfoBox from '../components/info-box';
import InfoCard from '../components/info-card';
import Layout from '../components/layout';
import Cin1 from '../images/FishyMissileTitle.png';
import Cin2 from '../images/FishyMissileCinematics.png';
import Cin3 from '../images/FishyMissileSkip.png';
import { thirdImage, tripleImage } from '../components/info-card.module.css';

const FishyMissileSummary = <span><b><i>Fishy Missile</i></b> is a comically evil (not-)fishing simulator where you dodge fish and collect scrap to build a moon-destroying missile. We wanted to create an experirence that could only work as a mobile game, and we also wanted the game to be accessible to a younger audience.</span>
const FishyMissileLinks = <span><a href="https://apps.apple.com/us/app/fishy-missile/id6778155374" target="_blank"><button>Play on iOS</button></a> <a href="https://play.google.com/store/apps/details?id=com.MassDiGI.CarpybarasGame" target="_blank"><button>Play on Android</button></a></span>
const FishyMissileContributions = <span><ul>
                              <li>Implemented tilt controls that calibrate instantly to current device orientation at the start of each play session, solving player frustration over inability to play tilt-based mobile games while lying down</li>
                              <li>Designed and implemented features, including cutscene and gameplay flow, depth meter, and hazards, in collaboration with 2 other programmers, 3 artists, and 1 audio designer</li>
                              <li>Conducted A/B testing with target demographic (children ages 9+) to identify preferred control scheme</li>
                              <li>Facilitated daily tech Kanban board review, reviewed code, and incorporated show-and-tell into end-of-day meeting</li>
                              </ul>
                    </span>
const FishyMissileTiltControls = <span><h2>Tilt Controls</h2>
                    <p>Tilt controls are unique to mobile, so my team was interested in making that our game's primary control scheme. Only a few popular games like <i>Ninja Fishing</i>, <i>Temple Run</i>, and <i>Doodle Jump</i> use tilt controls, so we weren't sure how the unconventional control scheme would be received. We did A/B testing comparing touch controls against tilt controls, concluding that while touch is significantly easier to control, tilt is more fun in and of itself. Additionally, with our game scrolling vertically, having a finger on screen blocks some of the game view. Using tilt rather than touch also opened up the possibility for touch-based powerups, which led to our noclip dev tool making it into the final game as the ghost powerup.</p>
                    
                    <p>I owned the tilt controls, and I was interested in a novel implementation unlike the previously mentioned three games.</p>
                    <ul>
                        <li><b>Problem:</b> Accelerometer-based tilt controls in <i>Ninja Fishing</i>, <i>Temple Run</i>, and <i>Doodle Jump</i> make it impossible for the game to be played while lying down.</li>
                        <li><b>Solution:</b> Use the attitude (orientation) sensor instead, calculating relative tilt based on a reference orientation.</li>
                        <li><b>Trade-off:</b> Upright rotation is interpreted as tilt, so the game is difficult to play in moving vehicles or while walking.</li>
                        <li><b>Justification:</b> Most people will play the game while they are stationary, and people really like using their phone while lying on their side.</li>
                      </ul>

                      <ul>
                        <li><b>Problem:</b> Requiring the player to hold the phone still to calibrate disrupts the game flow.</li>
                        <li><b>Solution:</b> Automatically set a new reference orientation whenever a player swipes the start lever to begin a new session.</li>
                        <li><b>Trade-off:</b> The player may start the game at an awkward angle.</li>
                        <li><b>Justification:</b> Sessions are short, and the player can easily restart a dredge and re-calibrate.</li>
                      </ul>

                      <p>Here is the relevant code:</p>
                      <code>/// &lt;summary&gt;</code><br></br>
                      <code> /// Sets reference rotation based on current device rotation</code><br></br>
                      <code>/// &lt;/summary&gt;</code><br></br>
                      <code>public void CalibrateOrientation() &#123;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;if (!enabled) return;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;if (AttitudeSensor.current == null || !AttitudeSensor.current.enabled) &#123;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debug.LogWarning(&quot;Attitude sensor not available or enabled. Cannot calibrate orientation.&quot;);</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;&#125;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;m_referenceOrientation = AttitudeSensor.current.attitude.ReadValue();</code><br></br>
                      <code>&#125;</code><br></br><br></br>


                      <code>/// &lt;summary&gt;</code><br></br>
                      <code>/// Gets relative rotation of current orientation to reference orientation</code><br></br>
                      <code>/// &lt;/summary&gt;</code><br></br>
                      <code>/// &lt;returns&gt;Normalized tilt value based on device orientation&lt;/returns&gt;</code><br></br>
                      <code>public float GetNormalizedTilt() &#123;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;Quaternion deviceRotation = AttitudeSensor.current.attitude.ReadValue();</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;Quaternion relativeRotation = Quaternion.Inverse(deviceRotation) * m_referenceOrientation;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;float rotationY = relativeRotation.y / m_tiltBoundY;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;float rotationZ = relativeRotation.z / m_tiltBoundZ;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;return Mathf.Clamp(rotationZ - rotationY, - 1, 1);</code><br></br>
                      <code>&#125;</code><br></br><br></br>

                      <code>/// &lt;summary&gt;</code><br></br>
                      <code>/// Normalizes tilt and maps to horizontal position</code><br></br>
                      <code>/// &lt;/summary&gt;</code><br></br>
                      <code>/// &lt;param name=&quot;normalizedTilt&quot;&gt;Input tilt&lt;/param&gt;</code><br></br>
                      <code>/// &lt;returns&gt;Normalized horizontal position based on tilt&lt;/returns&gt;</code><br></br>
                      <code>private float MapTiltToPosition(float normalizedTilt) &#123;</code><br></br>
                      <code>&nbsp;&nbsp;&nbsp;return Mathf.Clamp(normalizedTilt, -1f, 1f) * m_movement.HorizontalBound;</code><br></br>
                      <code>&#125;
                      </code><br></br><br></br>

                    </span>

const FishyMissileCinematics = <span><h2>Cinematics</h2>
                    <p>I worked with one of our artists, Orlando Zapata, and our audio designer, Claire Mayfield, to finalize the cutscenes in engine. I set up the animation clips with all the frames and guided Orlando, who had never used Unity before, through how to time them. After Orlando finished timing the cutscene, I would pass it on to Claire to finish.</p>         
                    
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KS_NenWW2Sc?si=WZd1YqReSJTSRNAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    
                    <p>I pitched and designed the cinematics menu that allows players to rewatch cutscenes. I added flags to check whether a cutscene should be played and to unlock the cutscene in the cinematics menu. I also implemented the cinematic skip button, which only appears after the screen is tapped and fades out if not pressed after a few seconds.</p>
                    <p><div className={tripleImage}>
                      <div className={thirdImage}><img src={Cin1}></img></div>
                      <div className={thirdImage}><img src={Cin2}></img></div>
                      <div className={thirdImage}><img src={Cin3}></img></div>
                    </div></p>     
                    
                    </span>
  
const FishyMissilePage = () => {
  return (
    <Layout pageTitle="Fishy Missile">
      <GameInfo summary={FishyMissileSummary}
                genre="2D comedic fishing game" 
                platforms="iOS, Android"
                tools="Unity, C#, Plastic SCM" 
                size="7"
                duration="May 2026 - July 2026 (3 months)"
                status="Released July 2026"
                links={FishyMissileLinks}
                video="https://www.youtube.com/embed/-E0ExsUGsFo"
                roles="Lead Programmer"
                contributions={FishyMissileContributions}>
      </GameInfo>
      <p></p>
      <InfoBox content={FishyMissileTiltControls}></InfoBox>
      <p></p>
      <InfoBox content={FishyMissileCinematics}></InfoBox>
    </Layout>
  )
}
export default FishyMissilePage