import React from 'react';
import { HiSupport, HiThumbUp, HiUserGroup } from "react-icons/hi";
import { FaCreditCard, FaDesktop, FaDonate, FaMoneyBillAlt, FaTools } from "react-icons/fa";

const DonateFreely = () => {
    return (
        <div className='bg-green-100 py-14'>
            <div data-aos="fade-right" data-aos-duration="3000">
                <h2 className='text-3xl text-center text-green-600 font-bold'>Why DonateFreely?</h2>
                <div className='border-2 border-red-600 w-16 mx-auto mb-3 mt-2 rounded'></div>
            </div>
            <section 
                className='grid grid-cols-2 xl:grid-cols-4 gap-8 p-8' 
                data-aos="zoom-in-right"
                data-aos-duration="3000"
                >
                <div className='mt-4 p-2'>
                    <HiThumbUp className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>Industry’s best fundraising success rate</p>
                </div>
                <div className='mt-4 p-2'>
                    <HiUserGroup className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>Supported By 55,00,000+ Donors</p>
                </div>
                <div className='mt-4 p-2'>
                    <FaTools className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>Easy-To-Manage Tools To Boost Results</p>
                </div>
                <div className='mt-4 p-2'>
                    <FaCreditCard className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>Receive donations via all popular payment modes</p>
                </div>
                <div className='mt-4 p-2'>
                    <HiSupport className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>Get Expert Support 24/7</p>
                </div>
                <div className='mt-4 p-2'>
                    <FaDesktop className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>A Dedicated Smart-Dashboard</p>
                </div>
                <div className='mt-4 p-2'>
                    <FaMoneyBillAlt className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>Withdraw Funds Without Hassle</p>
                </div>
                <div className='mt-4 p-2'>
                    <FaDonate className='w-20 h-20 mx-auto text-[#039695] p-2 border-2 border-[#039695] rounded-full' />
                    <div className='border-2 border-red-600 w-20  mx-auto mt-4 rounded'></div>
                    <p className='text-center text-[19px] mt-4'>International Payment Support</p>
                </div>
            </section>
        </div>
    );
};

export default DonateFreely;