import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from "../../../assets/images/header.jpg"
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className='bg-green-100 pb-14 pt-4'>
           <div className='container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8'
                data-aos="fade-right"
                data-aos-duration="3000"
                >
                <div className=''>
                    <img className='w-full md:rounded-md shadow-lg md:p-2' src={BannerImg} alt="" />
                </div>
                <div className='p-8 lg:mt-6'>
                    <h1 className='text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>Let’s Help Those Who Are More In Need</h1>
                    <p className='text-justify text-[20px] mb-5'>In its simplest form, Crowdfunding is a practice of giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.</p>
                    <Link><PrimaryButton>Start a Fundraise</PrimaryButton></Link>
                </div>
           </div>
        </div>
    );
};

export default Banner;