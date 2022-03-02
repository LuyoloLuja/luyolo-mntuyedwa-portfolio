import React from 'react'
import {FaAward} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

import './about.css'
import ME from '../../assets/luja.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Luyolo Mntuyedwa" />
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

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ratione modi maiores molestiae quisquam nobis esse, pariatur facilis tenetur corrupti, soluta, itaque sequi dicta odit deleniti neque accusantium et. Unde!
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>     
        </div>
      </div>
    </section>
  )
}

export default About