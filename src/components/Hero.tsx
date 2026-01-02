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
  navigation
  pagination={{ clickable: true }}
  centeredSlides
  slidesPerView={1.4}
  spaceBetween={56}
  loop
  autoplay={{ delay: 3500, disableOnInteraction: false }}
  speed={800}
>


        {[slide1, slide2, slide3, slide4].map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-card"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="card-overlay">
                <button className="card-btn">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
