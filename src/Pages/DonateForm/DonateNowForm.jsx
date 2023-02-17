import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CardImg from '../../assets/logo/PaymentCrd.png';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const DonateNowForm = () => {
    const [amount, setAmount] = useState(5);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const data = {amount, name, email};
        console.log(data);
        toast.success("Donation submitted!");
        form.reset();
    }

    
    return (
        <div className='bg-red-50 py-14'>
            <h2 className='text-3xl text-green-600 font-bold text-center'>Donation</h2>
            <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
            <p className='text-center text-[19px] px-8'>You can make charitable donations to our organization by filling out the form below. We accept debit/credit cards, as well as Paypal.</p>
            <div className='my-4 px-8'>
                <img src={CardImg} alt="" />
            </div>
            <form onSubmit={handleSubmit} className='p-8'>
                {/* <label className='flex items-center w-9/12 md:w-7/12 xl:w-4/12 bg-[#edfafa] text-[20px] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2'>
                    <span className='text-[20px] ml-2'>$</span>
                    <div className="divider divider-horizontal"></div> 
                    <input type="text" name="amount" readOnly defaultValue={amount} id="" className='bg-[#edfafa] w-32 border-none outline-none' required />
                </label> */}
                <p className='text-[20px] font-bold mb-4'>Choose Amount</p>
                <div className='flex my-4 text-[18px] md:text-[20px]'>
                    <label className='flex items-center w-12 bg-[#edfafa] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2 mr-3'>
                        <span className='mr-[1px]'>$</span>
                        <input onClick={(e) => setAmount(e.target.value)} type="text" name="five" defaultValue="5" readOnly className='bg-[#edfafa] w-5 border-none outline-none' id="" />
                    </label>
                    <label className='flex items-center w-[58px] bg-[#edfafa] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2 mr-3'>
                        <span className='mr-[1px]'>$</span>
                        <input onClick={(e) => setAmount(e.target.value)} type="text" name="ten" defaultValue="10" readOnly className='bg-[#edfafa] w-7 border-none outline-none' id="" />
                    </label>
                    <label className='flex items-center w-[58px] bg-[#edfafa] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2 mr-3'>
                        <span className='mr-[1px]'>$</span>
                        <input onClick={(e) => setAmount(e.target.value)} type="text" name="tweentyFive" defaultValue="25" readOnly className='bg-[#edfafa] w-7 border-none outline-none' id="" />
                    </label>
                    <label className='flex items-center w-[58px] bg-[#edfafa] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2 mr-3'>
                        <span className='mr-[1px]'>$</span>
                        <input onClick={(e) => setAmount(e.target.value)} type="text" name="fifty" defaultValue="50" readOnly className='bg-[#edfafa] w-7 border-none outline-none' id="" />
                    </label>
                    <label className='flex items-center w-[67px] bg-[#edfafa] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2'>
                        <span className='mr-[1px]'>$</span>
                        <input onClick={(e) => setAmount(e.target.value)} type="text" name="hundred" defaultValue="100" readOnly className='bg-[#edfafa] w-9 border-none outline-none' id="" />
                    </label>
                </div>
                {/* <button className='bg-[#edfafa] hover:bg-[#d7f5f5] text-[18px] font-bold shadow-md border-1 border-green-300 outline-none rounded-md px-3 py-2 mb-4'>Custom Amount</button> */}
                {/* <br /> */}
                <p className='text-[20px] font-bold mb-4'>Personal Info</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <label>
                        <p className='text-[19px] font-bold mb-2'>Full Name<span className='text-red-600'>*</span></p>
                        <input type="text" name="name" id="" placeholder='FULL NAME' className='w-full bg-[#edfafa] text-[20px] shadow-md border-1 border-green-300 outline-none rounded-md pl-4 p-2' required />
                    </label>
                    <label>
                        <p className='text-[19px] font-bold mb-2'>Email Address<span className='text-red-600'>*</span></p>
                        <input type="email" name="email" id="" placeholder='E-MAIL ADDRESS' className='w-full bg-[#edfafa] text-[20px] shadow-md border-1 border-green-300 outline-none rounded-md pl-4 p-2' required />
                    </label>
                    <label className='flex items-center w-[275px] bg-[#edfafa] text-[20px] shadow-md border-1 border-green-300 outline-none rounded-md pl-4 p-2'>
                        <p className='font-bold'>Donation Total</p>
                        <div className="divider divider-horizontal"></div>
                        <p className='font-bold'>$ {amount}</p>
                    </label>
                </div>
                <PrimaryButton><input type="submit" value="Donate Now" /></PrimaryButton>
            </form>
        </div>
    );
};

export default DonateNowForm;