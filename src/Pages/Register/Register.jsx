import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import { AuthContext } from '../../Contexts/AuthProvider';
import blankPP from "../../assets/icon/blnkPP1.png"
import { useForm } from 'react-hook-form';
import Loader from '../../components/Loader/Loader';


const Register = () => {
    const {createUser, profileUpdate, loading, user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('');

    const Navigate = useNavigate();

    const [profileImg, setProfileImg] = useState('');

    const ImageHostKey = process.env.REACT_APP_Imagebb_apiKey;

    const handleRegister = data => {
        setIsLoading(true);
        const name = data.name;
        const email = data.email;
        const password = data.password;

        //create user
        createUser(email, password)
        .then(result => {
            toast.success("User created successfully!");

            // upload image with imagebb
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${ImageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const img = (imageData.data.display_url);
                setProfileImg(img);

                const profile = {
                    displayName: name,
                    photoURL: img
                }

                profileUpdate(profile)
                .then(result => {
                    Navigate("/")
                })
                .catch(err => setError(err.message))
            })
        })
        .catch(err => setError(err.message))
    }

    if(loading){
        return <Loader />
    }

    return (
        <section className='bg-paper flex items-center justify-center py-14'>
            <div className='w-11/12 md:w-6/12 xl:w-4/12 p-6 bg-green-100 shadow-2xl'>
                <div>
                    <h1 className='text-3xl font-bold text-center mb-5'>Register Now!</h1>
                    <img src={profileImg ? profileImg : blankPP} className="w-32 h-32 rounded-full bg-white p-2 mx-auto" alt="" />
                </div>
                <form onSubmit={handleSubmit(handleRegister)} 
                    className='grid grid-cols-1 pb-5 gap-1'
                    >
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", { required: "Name is required" })} placeholder="your name" className="bg-white py-3 px-4 border-none outline-none" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    <label className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input className='bg-white py-3 px-4 border-none outline-none' type="file" {...register("image", { required: "Picture is required" })} id="" />
                    {errors.image && <p role="alert" className='text-red-600 text-center mb-2'>{errors.image?.message}</p>}
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
                        <SecondaryButton><input type="submit" value="Register" /></SecondaryButton>
                    </div>
                </form>
                <div className='mb-8'>
                    <h4 className='text-[17px] mb-3 text-center'>Already have an Account? <Link to="/login" className='text-red-600 font-semibold link-hover'>Please Login</Link></h4>
                </div>
            </div>
        </section>
    );
};

export default Register;