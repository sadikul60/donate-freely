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
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const GiveThems = () => {
    return (
        <div className='bg-[#d4fcfd] py-14 items-center'>
            <section 
                className='grid grid-cols-1 xl:grid-cols-2' 
                data-aos="fade-left"
                data-aos-duration="2000">
                <div className='xl:ml-8' >
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
                            <img
                                className="object-fill w-full h-96"
                                src={donation0}
                                alt="donation0"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation1}
                                alt="donation1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation2}
                                alt="donation2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation3}
                                alt="donation3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation4}
                                alt="donation4"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation5}
                                alt="donation5"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation6}
                                alt="donation6"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="object-fill w-full h-96"
                                src={donation7}
                                alt="donation7"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='pl-8 pt-12 xl:pt-28 text-center'>
                    <h2 className='text-3xl text-green-600 font-bold'>Give Someone’s Life By Giving Of Yours</h2>
                    <p className='pb-8 text-[20px] pt-6'>A little support from you means a lot to them. So come, we willingly stand by them. Help them in danger.</p>
                    <Link to="/donateForm"><PrimaryButton>Donate Now</PrimaryButton></Link>
                </div>
            </section>
        </div>
    );
};

export default GiveThems;