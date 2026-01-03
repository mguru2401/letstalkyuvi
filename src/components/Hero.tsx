import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation,Pagination  } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import '../styles/hero.css'

import slide1 from '../assets/hero/image_1.jpg'
import slide2 from '../assets/hero/image_2.jpg'
import slide3 from '../assets/hero/image_3.jpg'
import slide4 from '../assets/hero/image_4.jpg'

export const Hero: React.FC = () => {
  return (
    <section className="hero">
<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  loop
  speed={800}
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation
  breakpoints={{
  0: {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16,
  },
  768: {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 24,
  },
  1024: {
    slidesPerView: 1.6,   // 👈 KEY FIX
    centeredSlides: true,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 2.2,   // 👈 only for large desktops
    centeredSlides: true,
    spaceBetween: 56,
  },
}}

  className="hero-swiper"
>



        {[slide1, slide2, slide3, slide4,slide1, slide2, slide3, slide4].map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-card"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* <div className="card-overlay">
                <button className="card-btn">Explore</button>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
