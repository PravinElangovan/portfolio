import React from 'react'
import './Hero.css'
import profile_img from '../../assets/portfolio.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1>I'm <span>Pravin kumar,</span> Fullstack developer based in Chennai📍.</h1>
      <p>I'm a full-stack developer with a solid understanding of data structures and algorithms, proficient in Java, and experienced in creating high-quality projects. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href={resume} download="Pravin_Kumar_Resume.pdf">My resume</a></div>
      </div>
    </div>
  )
}

export default Hero
