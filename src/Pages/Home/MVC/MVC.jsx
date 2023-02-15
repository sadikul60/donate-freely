import React from 'react';

const MVC = () => {
    return (
        <div className='mb-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8'>
                <div className='bg-green-400 text-center text-2xl py-8 px-4 rounded shadow-2xl'>
                    <h2 className='text-[#0b4341] mb-4 uppercase font-bold'>Mission</h2>
                    <p>To transform aid and philanthropy to accelerate communty-led change.</p>
                </div>
                <div className='bg-green-400 text-center text-2xl py-8 px-4 rounded shadow-2xl'>
                    <h2 className='text-[#0b4341] mb-4 uppercase font-bold'>Vission</h2>
                    <p>Unleashed potential of people to make positive change happen.</p>
                </div>
                
            </section>
            <div className='mx-8 md:w-3/4 xl:w-1/2 md:mx-auto bg-green-400 text-center text-2xl py-8 px-4 rounded shadow-2xl'>
                <h2 className='text-[#0b4341] mb-4 uppercase font-bold'>Commitment</h2>
                <p>Use our privilege, influence, and access to share power, delivering equitable and inclusive sevices so everyone in our vommunity feels safe, valued, and supported.</p>
            </div>
        </div>
    );
};

export default MVC;