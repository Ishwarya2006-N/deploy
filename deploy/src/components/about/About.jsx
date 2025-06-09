import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setplay}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'></img>
            <img src={play_icon} className='play-icon' onClick={()=>{setplay(true)}}></img>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Welcome to a place where knowledge meets innovation and dreams become reality.
                 Founded with a vision to empower future leaders and thinkers, our university is committed to 
                academic excellence, cutting-edge research, and holistic student development.</p>
            <p>we offer a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines. Our dedicated faculty,
                 modern infrastructure,
                 and student-centric approach create an environment that fosters curiosity, creativity, and critical thinking.</p>
                 <p>Beyond academics, we emphasize values, leadership, and global citizenship. With vibrant campus life,
                     industry collaborations, and international partnerships,
                     we prepare our students not just for careers, but for life.</p>    
        </div>
    </div>
  )
}

export default About