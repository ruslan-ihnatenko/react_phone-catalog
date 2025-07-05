// src/components/HomeBannerSlider/HomeBannerSlider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './HomeBannerSlider.module.scss';

const slides = [
  {
    img: '../../public/img/banner-accessories.png',
    title: 'Now available in our store!',
    subtitle: 'Be the first!',
  },
  {
    img: '../../public/img/banner-phones.png',
    title: 'iPhone',
    subtitle: 'Pro. Beyond.',
  },
  {
    img: '../../public/img/banner-tablets.png',
    title: 'Tablets',
    subtitle: 'Some text',
  },
];

export const HomeBannerSlider: React.FC = () => (
  <div className={styles.sliderWrapper}>
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      navigation={true}
      loop
      slidesPerView={1}
      className={styles.swiper}
      breakpoints={{
        0: {
          navigation: false,
        },
        640: {
          navigation: true,
        },
      }}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <div className={styles.slideContent}>
            <img src={slide.img} alt={slide.title} />
            <div className={styles.textOverlay}>
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
