import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from "./components/Hero/Hero"
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/VideoPlayer/Videoplayer'

const App = () => {
  const [playState, setPlayState] = useState(false);
  // let playState = false;

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title title="OUR PROGRAMS" subtitle="What we offer"></Title>
        <Program></Program>
        <About setPlayState={setPlayState}></About>
        <Title title="Gallery" subtitle="Campus Photos "></Title>
        <Campus></Campus>
        <Title title="TESTIMONIALS" subtitle="What our students say..."></Title>
        <Testimonials></Testimonials>
        <Title title="CONTACT US" subtitle="Get In Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}></Videoplayer>
    </>
  )
}

export default App
