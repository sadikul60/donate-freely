import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start relative">
                {/* For mobile device menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        Menu
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                    <li><Link to="/" className='bg-white mb-2'>Home</Link></li>
                    <li><Link to="/fundraisers" className='bg-white mb-2'>Browse Fundraisers</Link></li>
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
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <span className='text-red-600'>
                        <span className='font-bold text-[26px]'>D</span>ONATE</span> 
                    <span className='text-blue-600'>
                        <span className='font-bold text-[26px]'>F</span>REELY
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* For large device menu*/}
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fundraisers">Browse Fundraisers</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Fundraise For
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                    <ul className="p-2 bg-slate-300">
                    <li><Link>Medical Treatment</Link></li>
                    <li><Link>Charity</Link></li>
                    <li><Link>Other Couse</Link></li>
                    </ul>
                </li>
                <li><Link>How It Works</Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden xl:block">
                <div className='flex justify-center items-center'>
                    <Link className="bg-white flex items-center outline outline-green-600 px-4 py-1 mr-4  rounded-md">
                        <FaWhatsapp className='w-7 h-7 text-green-600 mr-1' />
                        <span className='font-bold text-green-600 uppercase'>Chat</span>
                    </Link>
                    <Link to="/donateForm" className="bg-white outline outline-green-600 px-4 py-2 rounded-md mr-4">
                        <span className='font-bold text-green-600 uppercase'>Donate</span>
                    </Link>
                    <Link className='btn btn-ghost mr-4'>LogIn</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;