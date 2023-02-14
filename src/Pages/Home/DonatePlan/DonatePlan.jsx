import React from 'react';
import foodImg from "../../../assets/icon/food.png"
import shelter from "../../../assets/icon/shelter.png"
import eduction from "../../../assets/icon/icon4.svg"
import medical from "../../../assets/icon/medicine.svg"
import clothes from "../../../assets/icon/clothes.svg"
import others from "../../../assets/icon/icon13.svg"


const DonatePlan = () => {
    
    return (
        <section className='container mx-auto my-20'>
            <div className='text-center'>
                <h2 className='text-3xl text-green-600 font-bold'>Our Donate Plan</h2>
                <p className='md:w-3/4 md:mx-auto pb-8 text-[20px]'>A donation plan, also known as a giving plan or philanthropic plan, is a structured approach to making charitable contributions. It involves setting specific goals for giving and determining the best ways to allocate funds to different causes or organizations.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-blue-400 hover:bg-red-600 text-center p-6 duration-700 hover:mt-[-15px] hover:scale-105'>
                    <img className='w-16 mx-auto' src={foodImg} alt="" />
                    <h3 className='text-[22px] font-semibold text-white'>Food for a family</h3>
                    <p>Feeding a family can be a big responsibility, especially when it comes to providing healthy and nutritious meals.</p>
                </div>
                <div className='bg-blue-400 hover:bg-red-600 text-center p-6 duration-700 hover:mt-[-15px] hover:scale-105'>
                    <img className='w-16 mx-auto' src={shelter} alt="" />
                    <h3 className='text-[22px] font-semibold text-white'>Shelter for a family</h3>
                    <p>A shelter for a family is a place where a family can live in safety and security. It can be a temporary or permanent living arrangement.</p>
                </div>
                <div className='bg-blue-400 hover:bg-red-600 text-center p-6 duration-700 hover:mt-[-15px] hover:scale-105'>
                    <img className='w-16 mx-auto' src={eduction} alt="" />
                    <h3 className='text-[22px] font-semibold text-white'>Education for a child</h3>
                    <p>Education is crucial for a child's development and future success. It helps children acquire knowledge, develop critical thinking skills,</p>
                </div>
                <div className='bg-blue-400 hover:bg-red-600 text-center p-6 duration-700 hover:mt-[-15px] hover:scale-105'>
                    <img className='w-16 mx-auto' src={clothes} alt="" />
                    <h3 className='text-[22px] font-semibold text-white'>Clothes for a humans</h3>
                    <p>Clothing is an essential aspect of daily life for humans. It provides protection from the elements, helps regulate body temperature.</p>
                </div>
                <div className='bg-blue-400 hover:bg-red-600 text-center p-6 duration-700 hover:mt-[-15px] hover:scale-105'>
                    <img className='w-16 mx-auto' src={medical} alt="" />
                    <h3 className='text-[22px] font-semibold text-white'>Medical for a Patient</h3>
                    <p>Medical care is an important aspect of maintaining the health and well-being of a patient.</p>
                </div>
                <div className='bg-blue-400 hover:bg-red-600 text-center p-6 duration-700 hover:mt-[-15px] hover:scale-105'>
                    <img className='w-16 mx-auto' src={others} alt="" />
                    <h3 className='text-[22px] font-semibold text-white'>For others</h3>
                    <p>Providing support and resources to others can have a positive impact on their lives and well-being. There are many different ways to support.</p>
                </div>
            </div>
        </section>
    );
};

export default DonatePlan;