import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import "./gallery.css"
import gallery1 from "../../assets/farm1.png"
import gallery2 from "../../assets/farm2.png"
import gallery3 from "../../assets/farm3.png"
import gallery4 from "../../assets/farm4.png"

const Gallery = () => {
    return (
        <div className='container_' id='gallery'>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5

                    }
                }
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='swiper_container'
            >
                <SwiperSlide>

                    <img src={gallery1} alt='' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src={gallery2} alt='' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src={gallery3} alt='' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src={gallery4} alt='' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src={gallery4} alt='' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src={gallery4} alt='' />
                </SwiperSlide>
                <SwiperSlide>

                    <img src={gallery4} alt='' />
                </SwiperSlide>
                <div className='slider-controler'>
                    <div className='swiper-button-prev slider-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </Swiper>
        </div>
    )
}

export default Gallery
