import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';

const UserProfile = () => {
    const { user, logOut, loading} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {toast.success('Log out successfully!')})
        .catch(err => console.log(err.message))
    }

    if(loading){
        return <Loader />
    }
    return (
        <div className="dropdown ">
            <div className=''>
                <label tabIndex={1} className="">
                    <img className='w-12 h-12 mx-auto rounded-full' src={user?.photoURL} alt="" />
                </label>
                    <div tabIndex={1} className="dropdown-content mt-4 rounded shadow bg-black w-72 mx-auto left-[-173px]">
                        <h4 className='bg-green-500 text-center pt-4 pb-6 h-24 uppercase font-semibold'>{user?.displayName}</h4>
                        <div className='mt-[-50px]'>
                            <img className='w-28 h-28 mx-auto rounded-full mb-2' src={user?.photoURL} alt="" />
                        </div>
                        <div className='mt-3 text-center mb-5'>
                            <p className='text-gray-400'>{user?.displayName}</p>
                            <small className='text-gray-50'>{user?.email}</small>
                        </div>
                        <div className='text-center'>
                            <Link className='link link-hover text-white'>Update Profile</Link>
                        </div>
                        <div className='mb-8 mt-5'>
                            {
                                user? <div onClick={handleLogOut} className='bg-green-500 hover:bg-green-600 w-10/12 mx-auto text-center py-2'><Link className='text-white font-fold'>Log out</Link></div>
                                :
                                <li className=''><Link to="/login" className='bg-white mb-2'>LogIn</Link></li>
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserProfile;