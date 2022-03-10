import React from 'react'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './Certifications.css';
import IMG1 from '../../assets/simplilearn.jpg';
import IMG2 from '../../assets/Learning JDBC.jpg';

const certificates = [
  {
    avatar: IMG1,
  },
  {
    avatar: IMG2,
  },
]

const Certifications = () => {
  return (
    <section id='certicications'>
      <h5>What I've picked up along the way!</h5>
      <h2>Certifications</h2>

      <Swiper className="container certs__container"
          // install Swiper modules
        modules={[Pagination]}
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