import React from 'react';
import { HiStar} from "react-icons/hi"
import { motion } from 'framer-motion';

const Loader = ({children}) => {
    return (
        <div className='flex justify-center items-center w-[100%] h-[100vh]'>
            <motion.div 
                animate={{rotate: [0, 200, 200, 0], x: [0, 200, 200, 0, -200, -200, 0]}}
                
            >
                <HiStar className='w-12 h-12 mx-auto text-red-600'>Loading</HiStar>
            </motion.div>
        </div>
    );
};

export default Loader;