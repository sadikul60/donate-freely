import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import Banner from "../../../assets/logo/BannerDonate.png"

const MainFundraisers = () => {
    return (
        <div>
            <div className='w-full h-full' style={{ backgroundImage: `url(${Banner})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
                <div className='w-full h-60 flex items-center justify-center '>
                    <h1 
                        className='text-4xl md:text-5xl xl:text-6xl font-bold text-white text-center p-4'
                        data-aos="fade-left"
                        data-aos-offset="500"
                        data-aos-duration="2000"
                        >Support any helpless humans <p className=''>Every Month</p></h1>
                </div>
                <Link to="/donateForm" 
                    className='flex items-center justify-center  mt-[-20px] xl:mt-0 pb-8 xl:pb-16'
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="2000"
                    >
                    <button className='outline outline-green-600 text-[19px] font-bold text-white px-4 py-2 rounded-3xl hover:bg-[#122746]'>Donate Now</button>
                </Link>
            </div>
            <section className='bg-green-100'>
                <div className="flex items-center bg-red-100 xl:bg-none">
                    {/* For mobile device menu */}
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <HiMenu className='w-7 h-7'></HiMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <div className='bg-[#122746] px-4 pb-12 pt-6 rounded-md'>
                                <h4 className='text-[16px] text-white text-center font-bold pb-4'>All Categories</h4>
                                <li className='text-center'><Link to="" className='bg-white mb-2'>Education</Link></li>
                                <li><Link to="/fundraisers/medical" className='bg-white mb-2'>Medical</Link></li>
                                <li><Link className='bg-white mb-2'>Woman & Girls</Link></li>
                                <li><Link className='bg-white mb-2'>Food & Hunger</Link></li>
                                <li><Link className='bg-white mb-2'>Environment</Link></li>
                                <li><Link className='bg-white mb-2'>Children</Link></li>
                                <li><Link className='bg-white mb-2'>Others</Link></li>
                            </div>
                        </ul>
                    </div>
                    <div className="form-control hidden lg:block ">
                        <input type="text" placeholder="Search" className="input border-none bg-red-100" />
                    </div>
                </div>
                <div className='flex w-full'>
                    <section className='w-full lg:w-8/12 p-8'>
                        <Outlet />
                    </section>
                    <section className="navbar-end hidden lg:flex lg:w-4/12 ">
                        {/* For large device menu*/}
                        <ul className="menu menu-vertical p-8 w-full">
                            <div className='bg-[#122746] px-4 pb-12 pt-6 rounded-md'>
                                <h4 className='text-xl text-white text-center font-bold pb-4'>All Categories</h4>
                                <li><Link className='bg-white mb-2'>Education</Link></li>
                                <li><Link to="/fundraisers/medical" className='bg-white mb-2'>Medical</Link></li>
                                <li><Link className='bg-white mb-2'>Woman & Girls</Link></li>
                                <li><Link className='bg-white mb-2'>Food & Hunger</Link></li>
                                <li><Link className='bg-white mb-2'>Environment</Link></li>
                                <li><Link className='bg-white mb-2'>Children</Link></li>
                                <li><Link className='bg-white mb-2'>Others</Link></li>
                            </div>
                        </ul>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default MainFundraisers;