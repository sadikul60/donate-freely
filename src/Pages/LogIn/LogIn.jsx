import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const LogIn = () => {
    return (
        <section className='bg-green-50 h-[100vh] flex items-center justify-center'>
            <div className='w-11/12 md:w-8/12 xl:w-6/12 p-6'>
                <h1 className='text-3xl font-bold text-center mb-8'>Log In</h1>
                <form className='w-full'>
                    <div className='my-4'>
                        <label>
                            <h4 className='text-[19px] mb-3'>Email</h4>
                            <input type="email" name="email" placeholder='Enter your email'  className='w-full bg-white font-bold shadow-md border-none outline-none p-3 rounded' required />
                        </label>
                    </div>
                    <div className='my-4'>
                        <label>
                            <h4 className='text-[19px] mb-3'>Password</h4>
                            <input type="password" name="password" placeholder='Enter your password'  className='w-full bg-white font-bold shadow-md border-none outline-none p-3' required />
                        </label>
                    </div>
                    <div>
                        <Link className='link-hover'><h4 className='text-[17px] font-semibold mb-3'>Forget Password?</h4></Link>
                    </div>
                    <div className='mb-8'>
                        <h4 className='text-[17px] mb-3'>Are you new to DonateFreely? <Link to="/register" className='text-red-600 font-semibold link-hover'>Register</Link></h4>
                    </div>
                    <PrimaryButton><input type="submit" value="Login Now" /></PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default LogIn;