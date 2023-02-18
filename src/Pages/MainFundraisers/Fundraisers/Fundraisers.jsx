import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../../../assets/logo/BannerDonate.png"
import DonationNow from '../DonationNow/DonationNow';


const Fundraisers = () => {
    return (
        <div>
            <div className='w-full h-full' style={{ backgroundImage: `url(${Banner})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='w-full h-60 xl:h-72 flex items-center justify-center '>
                    <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold text-white text-center p-4'>Support any helpless humans <p className=''>Every Month</p></h1>
                </div>
                <Link className='flex items-center justify-center xl:hidden mt-[-20px] xl:mt-0 pb-8 xl:pb-0'>
                    <button className='outline outline-green-600 text-[19px] font-bold text-white px-4 py-2 rounded-3xl hover:bg-[#122746]'>Donate Now</button>
                </Link>
            </div>
            <DonationNow />
        </div>
    );
};

export default Fundraisers;