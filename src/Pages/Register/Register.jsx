import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton';
import { AuthContext } from '../../Contexts/AuthProvider';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.log(err))

        const data = {img, name, email, password}
        // console.log(data);
        toast.success("Register successfull!");
        form.reset();
    }
    return (
        <section className='bg-green-50 md:h-[100vh] flex items-center justify-center py-14'>
            <div className='w-11/12 md:w-8/12 xl:w-6/12 p-6'>
                <h1 className='text-3xl font-bold text-center mb-8'>Register</h1>
                <form onSubmit={handleRegister} className='w-full'>
                    <div className='w-full md:w-8/12 xl:w-1/2 mx-auto bg-white text-center border-none pb-6 pt-2 px-4 shadow-md rounded-md'>
                        <label>
                            <h4 className='text-[19px] mb-3 font-semibold'>Select Photo</h4>
                            <input type="file" name="img" id="" className='' required />
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='md:flex md:items-center md:justify-center md:text-center md:bg-white md:p-2 md:shadow-md md:mb-0 md:rounded-md'>
                            <h4 className='text-[19px] md:text-[18px] md:font-semibold mb-3 md:mb-1'>Name</h4>
                            <div className="divider divider-horizontal"></div>
                            <input type="text" name="name" placeholder='Enter your name'  className='w-full bg-white md:bg-none font-bold shadow-md md:shadow-none border-none outline-none p-3 md:p-0 rounded-md' required />
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='md:flex md:items-center md:justify-center md:text-center md:bg-white md:p-2 md:shadow-md md:mb-0 md:rounded-md'>
                            <h4 className='text-[19px] md:text-[18px] md:font-semibold mb-3 md:mb-1'>Email</h4>
                            <div className="divider divider-horizontal"></div>
                            <input type="email" name="email" placeholder='Enter your email'  className='w-full bg-white md:bg-none font-bold shadow-md md:shadow-none border-none outline-none p-3 md:p-0 rounded-md' required />
                        </label>
                    </div>
                    <div className='my-4'>
                        <label className='md:flex md:items-center md:justify-center md:text-center md:bg-white md:p-2 md:shadow-md md:mb-0 md:rounded-md'>
                            <h4 className='text-[19px] md:text-[18px] md:font-semibold mb-3 md:mb-1'>Password</h4>
                            <div className="divider divider-horizontal"></div>
                            <input type="password" name="password" placeholder='Enter your password'  className='w-full bg-white md:bg-none font-bold shadow-md md:shadow-none border-none outline-none p-3 md:p-0 rounded-md' required />
                        </label>
                    </div>
                    <div className='mb-8'>
                        <h4 className='text-[17px] mb-3'>Already have an Account? <Link to="/login" className='text-red-600 font-semibold link-hover'>Login</Link></h4>
                    </div>
                    <SecondaryButton><input type="submit" value="Register" /></SecondaryButton>
                </form>
            </div>
        </section>
    );
};

export default Register;