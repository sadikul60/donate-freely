import React from 'react';
import { Link } from 'react-router-dom';
import doners1 from "../../../assets/images/doners1.jpg"
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import RegularDoner from './Testimonial';

const RegularDoners = () => {
    const data = [
        {
            id: 1,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 2,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 3,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 4,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 5,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 6,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 7,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
        {
            id: 8,
            img: doners1,
            name: "Kowsik Roy",
            title: "Web Developer",
            rating: "star",
            details: "email, facebook, linkedIn profile thakbe."
        },
    ]
    return (
        <section className='bg-red-100 py-14'>
            <div data-aos="fade-right" data-aos-duration="3000">
                <h2 className='text-3xl text-green-600 font-bold text-center'>Testimonial</h2>
                <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 p-8 gap-8'>
                {
                    data.map(item => <RegularDoner
                        key={item?.id}
                        item={item}
                    ></RegularDoner>)
                }
            </div>
            <div className='ml-[40%] xl:ml-[45%] mt-4'>
                <Link >
                    <PrimaryButton className=" pt-8">See More</PrimaryButton>
                </Link>
            </div>
        </section>
    );
};

export default RegularDoners;