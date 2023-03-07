import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const Testimonial = ({item}) => {
    const {img, name, title} = item;

    const buttonVariants = {
        hover: {
            scale: 1.1,
            boxShadow: "0px 0px 25px #0b4341",
            transition: {
                duration: 0.6,
                yoyo: Infinity
            }
        }
    }
    return (
        <motion.div 
            variants={buttonVariants}
            whileHover="hover"
            className='text-center rounded-xl'
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            >
            <img className='w-full h-48 mx-auto rounded-t-xl mb-6' src={img} alt="" />
            <div className='p-1'>
                <h3 className='text-[21px] font-semibold mb-1'>{name}</h3>
                <h4 className='text-[18px] mb-2'>{title}</h4>
                <div className='flex justify-center mb-6 '>
                    <HiStar className='w-7 h-7 text-yellow-700'></HiStar>
                    <HiStar className='w-7 h-7 text-yellow-700'></HiStar>
                    <HiStar className='w-7 h-7 text-yellow-700'></HiStar>
                    <HiStar className='w-7 h-7 text-yellow-700'></HiStar>
                    <HiStar className='w-7 h-7 text-yellow-700'></HiStar>
                </div>
            </div>
        </motion.div>
    );
};

export default Testimonial;