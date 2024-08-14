import React from 'react'
import {FaAward} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

import './about.css'
import ME from '../../assets/luyolo1.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Who is Luyolo Mntuyedwa?</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              {/* <img src={ME} alt="Luyolo Mntuyedwa" /> */}
            </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <BsFillPeopleFill className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>

            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>            
          </div>

          <div>
            <p>
              A developer who loves doing magic with code.
              <br /><br />
              I'm a passionate Junior Software Developer with a knack for turning ideas into functional, user-friendly web applications. 
              With a background in software development, I thrive on solving problems and learning new technologies. My journey so far 
              has been fueled by curiosity and a love for creating efficient, elegant code. Whether it's building responsive web interfaces 
              or exploring the latest in tech, I'm always eager to take on new challenges and grow as a developer.
              <br /><br />
              I have grown as a developer, I'm now seeking a full-time or freelancing role where I can contribute my skills to help organisations achieve their goals.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>     
        </div>
      </div>
    </section>
  )
}

export default About