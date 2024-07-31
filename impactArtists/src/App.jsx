import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import logo from "../public/logo.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <navbar>
          <img src={logo} height="28px"></img>
        </navbar>
      </header>

      <main>
        {/* landing page */}
        <div>
          <h1>We help founders scale their business and creators start their business through content.</h1>
        </div>
        <div>
          <button>I'm a creator</button>
          <button>I'm a founder</button>
        </div>

        {/* about */}
        <div>
          <img></img>

          <div>
            <img></img>
            <p>We are an end-to-end content company. We build superfans from founders and cults for businesses.</p>
          </div>
        </div>

        {/* services */}
        <div>
          <h2>Services</h2>
          {/* carousels */}
        </div>

        {/* How we work */}
        <div>
          <div>
            <p>
              We assess the requirements based on the brand message and content objectives how much time can be spent in a week on a 3 month basis and lay out a complete content engine accordingly. We make your brand talk.
            </p>
            <p>01.Strategize</p>
          </div>

          <div>
            <p>02.Film</p>
            <p>A team of content strategist, a video producer and two editors will accompany you throughout 3 months with 2 hours of filming session every week. We won't creep you out by knocking your front door.</p>
          </div>

          <div>
            <p>We turn the recorded session into 50+ pieces of content, add a little bit of our magic and distribute it across Youtube, Instagram, Linkedin, Twitter and Meta. Yes we do it all </p>
            <p>03.Distribute</p>
          </div>

          <div>
            <p>04.Listen</p>
            <p>Yes! We just sit back to listen, analyse basedd on data, feedback and engagement on what the viewers really expect from us and deliver it over time. We love your consumers too.</p>
          </div>

          <div>
            <p>Within 74 days, we generate 10+ viral videos, 10x the reach, bring in quality organic leads, spread the brand message and build a cult around your business.</p>
            <p>05.Result</p>
          </div>

          <div>
            <button>Kickstart your journey</button>
          </div>
        </div>

        {/* story */}
        <div>
          <p>We started this as a community to make a dent in the business world. We saw the gap to bridge local compnies with global markets. It was CONTENT! The reel you posted you on Instagram was a high chance of being watched by Post Malone  or Jensen Huang. It just gets down on how good of a content it is. To reach someone's feed and make them watch. We at Impact Artists, believe in #createimpact. We don't invent, we don't develop. We just create content that impacts.</p>
        </div>

      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
