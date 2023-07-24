import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import banner01 from '../../../../public/assets/images/banner/banner-01.jpg'
import banner02 from '../../../../public/assets/images/banner/banner-02.jpg'
import banner03 from '../../../../public/assets/images/banner/banner-04.jpg'
import banner04 from '../../../../public/assets/images/banner/banner-02.jpg'

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={banner01} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner02} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner03} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner04} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;