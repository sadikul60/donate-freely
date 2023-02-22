import React from 'react';
// import { FaArrowRight } from 'react-icons/fa';


const Fundraisers = () => {
    return (
        <div className='w-full h-96'>
            <div className='flex items-center justify-center h-96'>
                <div>
                    <h1 
                        className='text-3xl md:text-5xl font-bold'
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        >Welcome to Fundraisers</h1>
                    <div className='flex items-center justify-center'>
                        <p 
                            className='text-2xl md:text-3xl text-center mt-4 font-bold'
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            >Select Category</p>
                        {/* <FaArrowRight className='w-6 h-6 mt-4 mr-2 text-red-600'></FaArrowRight> */}
                    </div>
                    
                </div>
                <br />
            </div>
        </div>
    );
};

export default Fundraisers;