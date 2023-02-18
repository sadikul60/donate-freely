import React from 'react';
import { Link } from 'react-router-dom';
import donationImg from "../../../assets/images/donation8.jpg"
import { motion } from 'framer-motion';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const DonationNow = () => {
    return (
        <div className=''>
            <motion.section 
                initial={{ x: '100vw'}}
                animate={{x: 0}}
                transition={{type: 'spring', delay: 0.5}}
                className='bg-green-300 lg:w-8/12 lg:mx-auto lg:relative lg:mt-[-50px] my-8 pl-8 hidden xl:block'>
                <div className='lg:flex lg:items-center center pt-8 lg:pt-0 '>
                    <Link to="/donateForm" className='h-full mx-auto'>
                        <PrimaryButton>Donate now</PrimaryButton>
                    </Link>
                    <div className='lg:w-6/12 mx-5'>
                        <h2 className='text-[22px] font-semibold mb-4'>Start Monthly Donation to Save Lives</h2>
                        <p className='text-justify'>With your support, countless children will receive health care and a happy life. Start your monthly donation today.</p>
                    </div>
                    <img className='lg:w-60 lg:h-40 mx-auto ' src={donationImg} alt="" />
                </div>
            </motion.section>
        </div>
    );
};

export default DonationNow;