import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Certifications.css';

import IMG0 from '../../assets/great-learning-dotnet-fundamentals.png';
import IMG1 from '../../assets/great-learning-dotnet-core-intro.png';
import IMG2 from '../../assets/freecodecamp-csharp-foundational.png';
import IMG3 from '../../assets/simplilearn.jpg';
import IMG4 from '../../assets/Learning JDBC.jpg';
import IMG5 from '../../assets/freecodecamp.png';
import IMG6 from '../../assets/codex.jpg';

const certificates = [
  {
    avatar: IMG0
  },
  {
    avatar: IMG1
  },
  {
    avatar: IMG2,
  },
  {
    avatar: IMG3,
  },
  {
    avatar: IMG4,
  },
  {
    avatar: IMG5,
  },
  {
    avatar: IMG6,
  },
]

const Certifications = () => {
  return (
    <section id='certicications'>
      <h5>What I've picked up along the way!</h5>
      <h2>Certifications</h2>

      <Swiper className="container certs__container"
          // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          certificates.map(({avatar}, index) => {
            return (
              <SwiperSlide key={index} className='cert'>
                <div className="cert__avatar">
                  <img src={avatar} alt="certification" />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}
export default Certifications
