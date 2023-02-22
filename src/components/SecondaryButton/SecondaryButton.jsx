import React from 'react';
import { motion } from 'framer-motion';

const SecondaryButton = ({children}) => {
    const buttonVariants = {
        hover: {
            scale: 1.1,
            boxShadow: "0px 0px 25px #0b4341",
            transition: {
                duration: 0.5,
                yoyo: Infinity
            }
        }
    }
    return (
        <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className='text-[#0b4341] bg-white px-4 py-2 border-2 border-red-600 text-xl font-bold rounded'
        >
            {children}
        </motion.button>
    );
};

export default SecondaryButton;