import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/about/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/Footer'
import Videoplayer from './components/video-player/Videoplayer'


const App = () => {
  const[play,setplay]=useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle="OUR  PROGRAM" title="What We Offer"/>
           <Programs/>
           <About setplay={setplay}/>
         <Title subtitle="GALLERY" title="Our Campus Photos"/> 
         
         <Campus/>
         <Title subtitle="TESTIMONIALS" title="What Student Says"/>  
         <Testimonials/>
         <Title subtitle="CONTACT" title="Get in Touch"/>  
         <Contact/>
         <Footer/>
      </div>
       <Videoplayer play={play} setplay={setplay}/>
    </div>
  )
}

export default App