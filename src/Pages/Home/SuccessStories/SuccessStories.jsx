import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom';

import donation0 from "../../../assets/images/donation0.jpg"
import donation1 from "../../../assets/images/donation1.jpg"
import donation2 from "../../../assets/images/donation2.jpg"
import donation3 from "../../../assets/images/donation3.jpg"
import donation4 from "../../../assets/images/donation10.jpg"
import donation5 from "../../../assets/images/donation11.jpg"
import donation6 from "../../../assets/images/donation5.jpg"
import donation7 from "../../../assets/images/donation6.jpg"

const SuccessStories = () => {
    return (
        <div className='bg-[#d4fcfd] py-14'>
            <h2 className='text-3xl text-center text-green-600 font-semibold mb-8'>Successful Stories</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={2.8}
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
                    <img className='w-full h-40 mx-auto' src={donation0} alt="" /> 
                    <p className='text-center text-2xl mt-6'>Distribution of dry food among flood victims</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                    <img className='w-full h-44' src={donation1} alt="" />
                    <p className='text-center text-2xl mt-6'>Distribution of money among the needy and needy</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                    <img className='w-full h-44' src={donation2} alt="" />
                    <p className='text-center text-2xl mt-6'>Distribution of dry food among flood victims</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                    <img className='w-full h-44' src={donation3} alt="" />
                    <p className='text-center text-2xl mt-6'>You are the reason Suraj gets to live his dream</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                    <img className='w-full h-44' src={donation4} alt="" />
                    <p className='text-center text-2xl mt-6'>You are the reason Suraj gets to live his dream</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                    <img className='w-full h-44' src={donation5} alt="" />
                    <p className='text-center text-2xl mt-6'>You are the reason Suraj gets to live his dream</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SuccessStories;