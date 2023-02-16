
import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({children}) => {
    const buttonVariants = {
        hover: {
            scale: 1.1,
            // textShadow: "0px 0px 8px rgb(255,0,0)",
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
            className='text-[#0b4341] px-4 py-2 border-2 border-red-600 text-xl font-bold rounded-3xl'
        >
            {children}
        </motion.button>
    );
};

export default PrimaryButton;