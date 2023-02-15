import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from "../../../assets/images/header.jpg"

const Banner = () => {
    return (
        <div className='my-12'>
           <div className='container mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8'>
                <div className='mt-2'>
                    <img className='w-full md:rounded-md shadow-lg md:p-2' src={BannerImg} alt="" />
                </div>
                <div className='p-8 lg:mt-8'>
                    <h1 className='text-green-600 text-3xl md:text-4xl lg:text-5xl font-bold mb-10'>Let’s Help Those Who Are More In Need</h1>
                    <p className='text-justify text-[20px] mb-6'>In its simplest form, Crowdfunding is a practice of giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.</p>
                    <Link className='outline outline-black text-[20px] font-semibold hover:text-white hover:bg-green-600 text-center py-2 px-3  rounded'>Start a Fundraise</Link>
                </div>
           </div>
        </div>
    );
};

export default Banner;