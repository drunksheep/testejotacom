import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import styles from '../styles/components/CarouselSection.module.scss';
import Card from './Card';


export default function CarouselSection() {
  return (
    <section className={styles.CarouselSection}>
      <div className={`center-content ${styles.centerContent}`}>
        <Swiper 
          className={styles.swiperAdjust}
          loop={true}
          centeredSlides={true}
          navigation={true}
          slidesPerView={'auto'}
          breakpoints={{
            1: {
              slidesPerView: 1, 
              spaceBetween: 40,
            }, 
            1201: {
              slidesPerView: 3,
              spaceBetween: 16,
              initialSlide: 2
            }
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <Card
              title={'Receita 01'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'Receita 01'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'Receita 01'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              title={'Receita 01'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}
