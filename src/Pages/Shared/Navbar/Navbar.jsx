import React, { useContext } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo/donationLogo.png"
import Loader from '../../../components/Loader/Loader';
import { AuthContext } from '../../../Contexts/AuthProvider';
import profileImg from "../../../assets/icon/blnkPP.png"
import { toast } from 'react-toastify';
import UserProfile from '../../UserProfile/UserProfile';

const Navbar = () => {
    const {loading, user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {toast.success('Log out successfully!')})
        .catch(err => console.log(err.message))
    }

    // if(loading){
    //     return <Loader />
    // }
    return (
        <div className="navbar bg-black">
            <div className="navbar-start relative py-2">
                {/* For mobile device menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        Menu
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-black w-56">
                    {
                        user? <>
                            <img className='w-20 h-20 mx-auto rounded-full mb-2' src={user?.photoURL} alt="" />
                            <p className='mb-5 text-center text-gray-400'>{user?.displayName}</p>
                            </>
                        :
                        <>
                            <img className='w-20 h-20 mx-auto rounded-full mb-2' src={profileImg} alt="" />
                            <p className='mb-5 text-center text-gray-400 uppercase'>Not a user</p>
                            </>
                    }
                    <li><Link to="/" className='bg-white mb-2'>Home</Link></li>
                    <li><Link to="/fundraisers" className='bg-white mb-2'>Browse Fundraisers</Link></li>
                    <li tabIndex={0}>
                        <Link className='bg-white mb-2'>
                        Fundraise For
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                        <ul className="p-2 bg-black">
                        <li><Link className='bg-white mb-2'>Medical Treatment</Link></li>
                        <li><Link className='bg-white mb-2'>Charity</Link></li>
                        <li><Link className='bg-white mb-2'>Other Couse</Link></li>
                        </ul>
                    </li>
                    <li><Link className='bg-white mb-2'>How It Works</Link></li>
                    <li><Link to="/donateForm" className='bg-white mb-2'>Donate Now</Link></li>
                    <li><Link className='bg-white mb-2'><FaWhatsapp className='w-6 h-6 text-green-400' />Chat</Link></li>
                    {
                        user? <li onClick={handleLogOut}><Link className='bg-white mb-2'>Log out</Link></li>
                        :
                        <li><Link to="/login" className='bg-white mb-2'>LogIn</Link></li>
                    }
                    </ul>
                </div>
                <img className='w-8 h-8 ml-4' src={logo} alt="" />
                <Link to="/" className="btn btn-ghost normal-case text-xl ml-[-10px]">
                    <span className='text-red-600'>
                        <span className='font-bold text-[26px]'>D</span>onate</span> 
                    <span className='text-blue-600'>
                        <span className='font-bold text-[26px]'>F</span>reely
                    </span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* For large device menu*/}
                <ul className="menu menu-horizontal px-1 text-[18px] text-white">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fundraisers">Browse Fundraisers</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Fundraise For
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                    <ul className="p-2 bg-black">
                    <li><Link>Medical Treatment</Link></li>
                    <li><Link>Charity</Link></li>
                    <li><Link>Other Couse</Link></li>
                    </ul>
                </li>
                <li><Link>How It Works</Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden lg:block">
                {/* for large device menu  */}
                <div className='flex justify-center items-center'>
                    <Link className="bg-white flex items-center outline outline-green-600 px-4 py-1 mr-5  rounded-md">
                        <FaWhatsapp className='w-7 h-7 text-green-600 mr-1' />
                        <span className='font-bold text-green-600 uppercase'>Chat</span>
                    </Link>
                    <Link to="/donateForm" className="bg-white outline outline-green-600 px-4 py-2 rounded-md mr-5">
                        <span className='font-bold text-green-600 uppercase'>Donate</span>
                    </Link>
                    {
                        user ? <UserProfile></UserProfile>
                        :
                        <Link to="/login" className='btn btn-ghost mr-5 text-[19px] text-white'>LogIn</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;