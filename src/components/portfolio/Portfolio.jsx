import React from 'react'

import './portfolio.css'
import IMG1 from '../../assets/learn.png'
import IMG2 from '../../assets/crowdfunding.png'
import IMG3 from '../../assets/component.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Learn Mine',
    description: "South Africa is a very dynamic country, with 11 official languages. With this web application we are teaching users to greet with some of South Africa's official languages",
    github: "https://github.com/xhanti-fatyela/Learn-Mine-Hack-Proj",
    demo: "https://learn-mine-hackathon.herokuapp.com/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crowd Funding',
    description: "Many good business ideas don't get to see the light due to lack of capital, even the youth end up being college dropout due too lack of funds. With this project people can raise funds and get their businesses up and running",
    github: "https://github.com/LuyoloLuja/crowdfunding",
    demo: "https://luyololuja.github.io/crowdfunding/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Pricing Component',
    description: "What would be a website with little or no traffic? More traffic means more business, especially for e-commerce. With this app users are enabled to choose a plan they plan for their websites to have more traffic",
    github: "https://github.com/LuyoloLuja/interactive-pricing-component-main",
    demo: "https://interactive-pricing-component-main-eta.vercel.app/"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio