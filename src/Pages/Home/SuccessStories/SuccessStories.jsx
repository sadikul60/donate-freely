import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import donation0 from "../../../assets/images/donation0.jpg"
import donation1 from "../../../assets/images/donation1.jpg"
import donation2 from "../../../assets/images/donation2.jpg"
import donation3 from "../../../assets/images/donation3.jpg"
import donation4 from "../../../assets/images/donation10.jpg"
import donation5 from "../../../assets/images/donation11.jpg"

const SuccessStories = () => {
    return (
        <div className='bg-[#d4fcfd] py-14'>
            <h2 className='text-3xl text-center text-green-600 font-semibold'>Successful Stories</h2>
            <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
            <Swiper
                spaceBetween={35}
                slidesPerView={1}
                loop={true}
                // centeredSlides={true}
                breakpoints={{
                    800: {
                      slidesPerView: 1.8,
                    },
                    1200: {
                      slidesPerView: 2.5,
                    },
                  }}
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                // className="mySwiper"  
                >
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg relative'>
                    <img className='w-full h-44 mx-auto' src={donation0} alt="" /> 
                    <p className='text-center text-2xl mt-6'>Distribution of dry food among flood victims</p>
                    <p className='text-[18px] text-justify mb-4 p-4'>“Our son’s cancer had relapsed after 2.5 years of chemotherapy & we knew we couldn’t afford his life-saving treatment. But thanks to your donations & prayers, he underwent successful treatment & is recovering well. May God bless you all for saving his life!” -Dhanasar (Father).</p>
                </SwiperSlide>
                <SwiperSlide className='bg-white rounded-md p-4 shadow-lg'>
                    <img className='w-full h-44' src={donation1} alt="" />
                    <p className='text-center text-2xl mt-6'>Distribution of money among the needy</p>
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