import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SuccessStory = ({item}) => {
    const {img, title, description} = item;
    return (
        <Swiper
                        spaceBetween={30}
                        slidesPerView={2}
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
                        <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                <img className='w-28 h-28 mx-auto rounded-full' src={img} alt="" /> 
                <p className='text-center'>{title}</p>
                <p>{description}</p>
            </SwiperSlide>
                    </Swiper>
        
    );
};

export default SuccessStory;