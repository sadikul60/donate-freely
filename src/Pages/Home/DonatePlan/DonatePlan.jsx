import React, { useState } from 'react';
import foodImg from "../../../assets/icon/food.png"
import shelter from "../../../assets/icon/shelter.png"
import eduction from "../../../assets/icon/icon4.svg"
import medicine from "../../../assets/icon/medicine.svg"
import clothes from "../../../assets/icon/clothes.svg"
import others from "../../../assets/icon/icon13.svg"
import { motion } from 'framer-motion';


const DonatePlan = () => {
    const [loading, setLoading] = useState(true);

    const data = [
        {
            id: 1,
            img: foodImg,
            title: "Food for a family",
            description: "Feeding a family can be a big responsibility, especially when it comes to providing healthy and nutritious meals."
        },
        {
            id: 2,
            img: shelter,
            title: "Shelter for a family",
            description: "A shelter for a family is a place where a family can live in safety and security. It can be a temporary or permanent living arrangement."
        },
        {
            id: 3,
            img: eduction,
            title: "Education for a child",
            description: "Education is crucial for a child's development and future success. It helps children acquire knowledge, develop critical thinking skills."
        },
        {
            id: 4,
            img: clothes,
            title: "Clothes for a humans",
            description: "Clothing is an essential aspect of daily life for humans. It provides protection from the elements, helps regulate body temperature."
        },
        {
            id: 5,
            img: medicine,
            title: "Medicine for a Patient",
            description: "Education is crucial for a child's development and future success. It helps children acquire knowledge, develop critical thinking skills."
        },
        {
            id: 6,
            img: others,
            title: "For others",
            description: "Providing support and resources to others can have a positive impact on their lives and well-being. There are many different ways to support."
        },
    ];

    const buttonVariants = {
        hover: {
            scale: 1,
            boxShadow: "0px 8px 25px #0b4341",
            transition: {
                duration: 0.6,
                yoyo: Infinity
            }
        }
    }
    
    return (
        <div className='bg-green-100 py-14'>
            <section className='container mx-auto'>
                <div 
                    className='text-center'
                    data-aos="fade-left"
                    data-aos-duration="2000"
                    >
                    <h2 className='text-3xl text-green-600 font-bold'>Our Donate Plan</h2>
                    <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
                    <p className='md:w-3/4 md:mx-auto pb-8 text-[20px]'>A donation plan, also known as a giving plan or philanthropic plan, is a structured approach to making charitable contributions. It involves setting specific goals for giving and determining the best ways to allocate funds to different causes or organizations.</p>
                </div>

                <div 
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        data.map(item => <motion.div  
                            variants={buttonVariants}
                            whileHover="hover"
                            key={item?.id} 
                            className='bg-[#6cd8db] text-center p-6'>
                            <div 
                                data-aos="fade-down"
                                data-aos-duration="2000">
                            <img className='w-16 mx-auto mb-4' src={item?.img} alt="img" />
                            <h3 className='text-[22px] font-semibold mb-2'>{item?.title}</h3>
                            <p className='text-[19px]'>{item?.description}</p>
                            </div>
                    </motion.div>)
                    }
                </div>
            </section>
        </div>
    );
};

export default DonatePlan;