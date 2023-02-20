import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';

const MenuItems = () => {
    return (
        <section className='bg-green-100'>
                <div className="flex items-center bg-red-100 xl:bg-none">
                    {/* For mobile device menu */}
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <HiMenu className='w-7 h-7'></HiMenu>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                        <li><Link to="/" className='bg-white mb-2'>Home</Link></li>
                        <li><Link to="/mainFundraisers" className='bg-white mb-2'>Browse Fundraisers</Link></li>
                        <li tabIndex={0}>
                            <Link className='bg-white mb-2'>
                            Fundraise For
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </Link>
                            <ul className="p-2 bg-slate-300">
                            <li><Link className='bg-white mb-2'>Medical Treatment</Link></li>
                            <li><Link className='bg-white mb-2'>Charity</Link></li>
                            <li><Link className='bg-white mb-2'>Other Couse</Link></li>
                            </ul>
                        </li>
                        <li><Link className='bg-white mb-2'>How It Works</Link></li>
                        <li><Link to="/donateForm" className='bg-white mb-2'>Donate Now</Link></li>
                        <li><Link className='bg-white mb-2'><FaWhatsapp className='w-6 h-6 text-green-400' />Chat</Link></li>
                        <li><Link className='bg-white mb-2'>LogIn</Link></li>
                        </ul>
                    </div>
                    <h1 className='hidden lg:block py-3'>Hello</h1>
                </div>
                <div className='flex w-full'>
                    <section className='w-8/12 p-8'>
                        <Outlet />
                    </section>
                    <section className="navbar-end hidden lg:flex w-4/12 mr-8">
                        {/* For large device menu*/}
                        <ul className="menu menu-vertical p-8 bg-slate-300 w-full">
                            <li className='text-center'><Link to="/donate" className='bg-white mb-2'>Home</Link></li>
                            <li><Link to="/mainFundraisers" className='bg-white mb-2'>Browse Fundraisers</Link></li>
                            <li><Link className='bg-white mb-2'>How It Works</Link></li>
                        </ul>
                    </section>
                </div>
        </section>
    );
};

export default MenuItems;