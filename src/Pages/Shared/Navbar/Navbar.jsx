import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    Menu
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                <li><Link>Browse Fundraisers</Link></li>
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
                <li><Link>Start a Fundraise</Link></li>
                <li><Link>LogIn</Link></li>
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
                <ul className="menu menu-horizontal px-1">
                <li><Link>Browse Fundraisers</Link></li>
                <li tabIndex={0}>
                    <Link>
                    Fundraise For
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>
                    <ul className="p-2">
                    <li><Link>Medical Treatment</Link></li>
                    <li><Link>Charity</Link></li>
                    <li><Link>Other Couse</Link></li>
                    </ul>
                </li>
                <li><Link>How It Works</Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:block">
                <Link className="outline outline-green-600 px-4 py-2 rounded-md mr-4">
                    <span className='font-bold text-green-600 uppercase'>Chat</span>
                </Link>
                <Link className="outline outline-green-600 px-4 py-2 rounded-md mr-4">
                    <span className='font-bold text-green-600 uppercase'>Start a Fundraise</span>
                </Link>
                <Link className='btn btn-ghost mr-4'>LogIn</Link>
            </div>
        </div>
    );
};

export default Navbar;