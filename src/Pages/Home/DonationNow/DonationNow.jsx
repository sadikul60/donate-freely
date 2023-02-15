import React from 'react';
import { Link } from 'react-router-dom';
import donationImg from "../../../assets/images/donation8.jpg"
import { motion } from 'framer-motion';

const DonationNow = () => {
    return (
        <div className='bg-green-100 pb-12'>
            <motion.section 
                initial={{ x: '100vw'}}
                animate={{x: 0}}
                transition={{type: 'spring', delay: 0.5}}
                className='bg-green-300 lg:w-7/12 lg:mx-auto lg:relative lg:mt-[-100px] my-8 hidden xl:block'>
                <div className='lg:flex lg:items-center center pt-8 lg:pt-0 '>
                    <Link className='lg:w-3/12 lg:ml-5 outline outline-red-600 text-[20px] font-semibold hover:text-red-600 hover:bg-white text-center py-2 rounded'>Donate now</Link>
                    <div className='lg:w-8/12 mx-5'>
                        <h2 className='text-[22px] font-semibold mb-4'>Start Monthly Donation to Save Lives</h2>
                        <p className='text-justify'>With your support, countless children will receive health care and a happy life. Start your monthly donation today.</p>
                    </div>
                    <img className='lg:w-44 lg:h-40' src={donationImg} alt="" />
                </div>
            </motion.section>
            <section className='bg-green-300 lg:w-7/12 lg:mx-auto lg:relative lg:mt-[-80px] mb-8 lg:hidden'>
                <div className='lg:flex lg:items-center center pb-12 '>
                    <img className='lg:w-44 lg:h-40' src={donationImg} alt="" />
                    <div className='lg:w-8/12 mx-5 mt-8'>
                        <h2 className='text-[22px] font-semibold mb-4'>Start Monthly Donation to Save Lives</h2>
                        <p className='text-justify mb-6'>With your support, countless children will receive health care and a happy life. Start your monthly donation today.</p>
                        <Link className=' outline outline-red-600 text-[20px] font-semibold hover:text-red-600 hover:bg-white text-center py-2 px-3 rounded'>Donate now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonationNow;