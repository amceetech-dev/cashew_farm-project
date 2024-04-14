import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import Title from './components/title/Title'
import Services from './components/services/Services'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/videoPlayer/Videoplayer'
import Team from './components/team/Team'


const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Slider />
      <div className='container'>
        <Title subTitle='Services' title='What We Offer' />
        <Services />
        <hr />
        <About setPlayState={setPlayState} />
        <hr />
        <Title subTitle='Team Members' title='Who We Are' />
        <Team />
        <hr />
      </div>

      <Title subTitle='Gallery' title='Farm Photos' />
      <Gallery />
      <div className='container'>
        <hr />

        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
      </div>
      <Footer />
      <Videoplayer playState={playState} setPlayState={setPlayState} />

    </div>
  )
}

export default App
