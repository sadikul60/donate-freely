import React from 'react';
import { Link } from 'react-router-dom';
import Medical1 from "../../../assets/medical/medical1.avif"
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Medical = () => {
    const data = [
        {
            id: 1,
            img: Medical1,
            title: "Her Mother Needs Your Help To Survive Blood Clots In The Brain!",
            description: "As this disease has left her unconscious, she is completely bedridden and can hardly move her body. My mother has always been a simple and cheerful woman. But, ever since the beginning of this year she has been quite ill and weak and now suffering from blood clotting in the brain. Her history of diabetes is adding to her misery. We as a family can only pray for her tremendous pain to go away, and provide aid her with medical help. I and my brother are my parent’s only emotional and financial support, while my dad is a retired person, he receives a minimal amount of monthly pension."
        },
        {
            id: 1,
            img: Medical1,
            title: "Her Mother Needs Your Help To Survive Blood Clots In The Brain!",
            description: "As this disease has left her unconscious, she is completely bedridden and can hardly move her body. My mother has always been a simple and cheerful woman. But, ever since the beginning of this year she has been quite ill and weak and now suffering from blood clotting in the brain. Her history of diabetes is adding to her misery. We as a family can only pray for her tremendous pain to go away, and provide aid her with medical help. I and my brother are my parent’s only emotional and financial support, while my dad is a retired person, he receives a minimal amount of monthly pension."
        },
        {
            id: 1,
            img: Medical1,
            title: "Her Mother Needs Your Help To Survive Blood Clots In The Brain!",
            description: "As this disease has left her unconscious, she is completely bedridden and can hardly move her body. My mother has always been a simple and cheerful woman. But, ever since the beginning of this year she has been quite ill and weak and now suffering from blood clotting in the brain. Her history of diabetes is adding to her misery. We as a family can only pray for her tremendous pain to go away, and provide aid her with medical help. I and my brother are my parent’s only emotional and financial support, while my dad is a retired person, he receives a minimal amount of monthly pension."
        },
    ]
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {
                data.map(item => <div
                    key={item?.id}
                    className="border-2 border-white rounded-md hover:shadow-red-400 hover:shadow-2xl"
                >
                    <img className='w-full rounded-t-md' src={item?.img} alt="" />
                    <div className='px-4 pb-4'>
                        <h3 className='text-[22px] font-semibold mt-4 mb-3'>{item?.title.slice(0, 20)}...</h3>
                        <p className='text-[19px] text-justify'>{item?.description.slice(0, 130)}...</p>
                        <Link><button className='outline outline-red-600 py-1 rounded text-center font-bold mt-4 w-full'>Details</button></Link>
                    </div>
                </div>)
            }
        </section>
    );
};

export default Medical;