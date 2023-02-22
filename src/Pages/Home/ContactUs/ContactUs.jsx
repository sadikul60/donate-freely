import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const info = {name, email, phone, subject, message}
        console.log(info)
        toast.success("Message Submitted!");
        form.reset();
    }
    return (
        <div className='bg-[#d4fcfd] py-14'>
            <div data-aos="fade-right" data-aos-duration="2000">
                <h2 className='text-3xl text-green-600 font-bold text-center'>Get In Touch</h2>
                <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <section>
                <div 
                    className='text-center'
                    data-aos="fade-left" 
                    data-aos-duration="2000"
                    >
                        <div className="mx-6 xl:mx-auto z-10 rounded-lg grid grid-cols-1 xl:grid-cols-3 px-12 md:px-20 gap-6 ">
                            <div className="py-6">
                                <FaPhoneAlt className="w-12 h-10 mx-auto" />
                                <p className="text-[20px] mt-6">+5-4698-6358-931</p>
                                {/* <p className="p-4">Contact via direct Phone call. And get the information you need.</p> */}
                            </div>
                            <div className="py-6">
                                <HiOutlineMail className="w-12 h-12 mx-auto" />
                                <p className="text-[20px] mt-6">donate@freely.com</p>
                                {/* <p className="p-4">Or contact via E-mail. And get the information you need.</p> */}
                            </div>
                            <div className="py-6">
                            <FaMapMarkerAlt className="w-12 h-12 mx-auto" />
                                <p className="text-[20px] mt-6">Mohish Bazar, Sopura, Rajshahi.</p>
                                {/* <p className="p-4">Or contact the Office directly. And get the information you need.</p> */}
                            </div>
                        </div>
                    </div>
            </section>
            <section 
                className='px-12 md:px-20 mt-12'
                data-aos="fade-right" 
                data-aos-duration="3000"
                >
                {/* form section  */}
                <form onSubmit={handleSubmit}>
                    <div className='md:flex gap-8'>
                        <div className='md:w-1/2 mx-auto'>
                            <input type="text" name="name" id="" placeholder='NAME' className='w-full bg-[#edfafa] shadow-md border-1 border-green-300 outline-none rounded-md p-4 mb-3' required />
                            <input type="email" name="email" id="" placeholder='EMAIL' className='w-full bg-[#edfafa] shadow-md border-1 border-green-300 outline-none rounded-md p-4 mb-3' required />
                            <input type="text" name="phone" id="" placeholder='PHONE' className='w-full bg-[#edfafa] shadow-md border-1 border-green-300 outline-none rounded-md p-4 mb-3' required />
                            <input type="text" name="subject" id="" placeholder='SUBJECT' className='w-full bg-[#edfafa] shadow-md border-1 border-green-300 outline-none rounded-md p-4 mb-3' required />
                        </div>
                        <div className='md:w-1/2 mx-auto'>
                            <textarea name="message" id="" rows={9} placeholder='MESSAGE' className='w-full bg-[#edfafa] shadow-md border-1 border-green-300 outline-none rounded-md p-6 mb-3' required />
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-5 w-full">
                        <PrimaryButton><input type="submit" value="Send Message" /></PrimaryButton>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;