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
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <BsFillPeopleFill className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>

            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>            
          </div>

          <div>
            <p>
              I am an ex-bartender who loves doing magic with code.
              <br /><br />
              I first became fascinated by programming in 2016. I was still working as a bartender at some local tarven, my cousin
              brother was telling me about how he was looking for people to build him a website
              for his business. We started looking for companies that do web development, and as someone who was always been fascinated 
              by technology, I was hooked.
              <br /><br />
              The following year, 2017, I enrolled at Richfield Graduate Institute of Technology to study Information Technology. Unfortunately,
              I couldn't complete my qualification because of financial problems. After a few months of self-teaching, I knew this was what I wanted 
              to do for my career. So, I signed up for the codeX web dev programme and put my heart and soul into it. I was coding every day, late into the night, and on weekends.
              <br /><br />
              Since the programme, I have grown as a developer, I'm now seeking a full-time role where I can contribute my skills to help a company achieve their goals.
            </p>
          </div>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>     
        </div>
      </div>
    </section>
  )
}

export default About