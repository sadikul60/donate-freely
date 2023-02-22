import React from 'react';

const MVC = () => {
    return (
        <div className='bg-green-100 py-14'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pt-6'>
                <div 
                    className='text-center text-2xl text-[#0b4341] py-8 px-4 rounded shadow-xl'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    >
                    <h2 className='mb-4 uppercase font-bold'>Mission</h2>
                    <div className='border-2 border-red-600 w-28 mx-auto mt-[-10px] mb-4 rounded'></div>
                    <p className='text-3xl'>To transform aid and philanthropy to accelerate communty-led change.</p>
                </div>
                <div 
                    className='text-center text-2xl text-[#0b4341] py-8 px-4 rounded shadow-xl'
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000"
                    >
                    <h2 className='mb-4 uppercase font-bold'>Vision</h2>
                    <div className='border-2 border-red-600 w-24 mx-auto mt-[-10px] mb-4 rounded'></div>
                    <p className='text-3xl'>Unleashed potential of people to make positive change happen.</p>
                </div>
                
            </section>
            <div 
                className='mx-8 md:w-3/4 xl:w-1/2 md:mx-auto text-[#0b4341] text-center text-2xl mt-8 py-8 px-4 rounded shadow-xl'
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000"
                >
                <h2 className='mb-4 uppercase font-bold'>Commitment</h2>
                <div className='border-2 border-red-600 w-44 mx-auto mt-[-10px] mb-4 rounded'></div>
                <p className='text-3xl px-4'>Use our privilege, influence, and access to share power, delivering equitable and inclusive sevices so everyone in our vommunity feels safe, valued, and supported.</p>
            </div>
        </div>
    );
};

export default MVC;