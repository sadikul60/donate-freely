import React from 'react';
import supportH from "../../../assets/images/supportH.jpg"

const Support = () => {
    return (
        <div className='bg-[#d4fcfd] py-14'>
            <div 
                
            >
                <div 
                    className='text-center'
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    >
                    <h2 className='text-3xl text-green-600 font-bold'>Support Humans</h2>
                    <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
                    <p className='md:w-3/4 md:mx-auto pb-8 text-[20px]'>A little support from you means a lot to them. So come, we willingly stand by them. Help them in danger.</p>
                </div>
                <div className='hidden xl:block'>
                    <section className='grid grid-cols-1 xl:grid-cols-2 bg-[#6cd8db]'>
                        <div 
                            className='pl-12 py-12' 
                            data-aos="fade-right"
                            data-aos-duration="3000">
                            <h3 className='text-2xl text-center font-semibold mb-6'>No More Homeless, No More Hunger</h3>
                            <p className='text-justify text-[19px]'>Hunger and homelessness are significant issues that affect millions of people around the world. While they are separate issues, they are often closely linked, as people who are homeless often struggle to access regular meals or have not the means to do buy food.</p>
                            <br />
                            <p className='text-justify text-[19px]'>Hunger and homelessness are complex issues that have a range of causes, including poverty, unemployment, natural disasters, conflict, and inadequate access to healthcare and education. Addressing these issues requires a multi-faceted approach that involves government policies, community action, and individual efforts. This can include providing access to affordable housing, increasing employment opportunities, supporting food banks and other initiatives to provide food to those in need, and advocating for policies that address the root causes of hunger and homelessness.</p>
                        </div>
                        <div data-aos="fade-right"
                            data-aos-duration="3000">
                            <img className='w-full h-full' src={supportH} alt="" />
                        </div>
                    </section>
                </div>
                <div className='xl:hidden'>
                    <section className='grid grid-cols-1 xl:grid-cols-2 bg-[#6cd8db]'>
                        <div>
                            <img className='w-full h-full' src={supportH} alt="" />
                        </div>
                        <div className='px-12'>
                            <h3 className='text-2xl text-center font-semibold mb-6'>No More Homeless, No More Hunger</h3>
                            <p className='text-justify text-[19px]'>Hunger and homelessness are significant issues that affect millions of people around the world. While they are separate issues, they are often closely linked, as people who are homeless often struggle to access regular meals or have not the means to do buy food.</p>
                            <br />
                            <p className='text-justify text-[19px] pb-12'>Hunger and homelessness are complex issues that have a range of causes, including poverty, unemployment, natural disasters, conflict, and inadequate access to healthcare and education. Addressing these issues requires a multi-faceted approach that involves government policies, community action, and individual efforts. This can include providing access to affordable housing, increasing employment opportunities, supporting food banks and other initiatives to provide food to those in need, and advocating for policies that address the root causes of hunger and homelessness.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Support;