import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import { AuthContext } from '../../Contexts/AuthProvider';

const LogIn = () => {
    const { logIn, loading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');

    const Navigate = useNavigate();
    
    
    // handle login with email & password
    const handleLogin = data => {
        
        logIn(data.email, data.password)
        .then(result => {
            setLoginError('')
            toast.success('Login successfully.');
            Navigate('/')
        })
        .catch(err => setLoginError(err.message))
    };

    if(loading){
        return <Loader />
    }
    return (
        <section className='bg-paper flex items-center justify-center py-14'>
            <div className='w-11/12 md:w-6/12 xl:w-4/12 p-6 bg-green-100 shadow-2xl'>
                <div className='mb-5'>
                    <h2 className='text-3xl font-bold text-center'>LogIn Now</h2>
                    <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
                    <SecondaryButton>LogIn with Google</SecondaryButton>
                </div>
                <p className='text-red-600'>{loginError}</p>
                <form onSubmit={handleSubmit(handleLogin)} 
                    className='grid grid-cols-1 pb-5 gap-1'
                    >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="email address" className="bg-white py-3 px-4 border-none outline-none" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required" })} placeholder="password" className="bg-white py-3 px-4 border-none outline-none" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className=" mt-4">
                        <SecondaryButton><input type="submit" value="LogIn" /></SecondaryButton>
                    </div>
                </form>
                <div>
                        <Link className='link-hover'><h4 className='text-[17px] font-semibold mb-3'>Forgotten Password?</h4></Link>
                    </div>
                    <div className='mb-8'>
                        <h4 className='text-[17px] mb-3'>Are you new to DonateFreely? <Link to="/register" className='text-red-600 font-semibold link-hover'>Register</Link></h4>
                    </div>
            </div>
        </section>
    );
};

export default LogIn;