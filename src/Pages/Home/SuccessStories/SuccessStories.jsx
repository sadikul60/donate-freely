import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import success1 from "../../../assets/successes/3childrens.jpg"
import success2 from "../../../assets/successes/coupleMan.jpg"
import success3 from "../../../assets/successes/educationHelpBoy.jpg"
import success4 from "../../../assets/successes/WmanSmile.jpg"
import success5 from "../../../assets/successes/peopleChild.jpg"
import success6 from "../../../assets/successes/GivenFood.jpg"
import { Link } from 'react-router-dom';

const SuccessStories = () => {
    
    const data = [
        {
            id: 1,
            img: success1,
            title: "Try to stand by the children",
            description: "Children are often vulnerable and need support and guidance as they navigate the world and develop their own sense of self. Listen to them: One of the best ways to stand by children is to simply listen to them. Give them your full attention and try to understand their perspective. Encourage them to express their thoughts and feelings and validate their experiences."
        },
        {
            id: 2,
            img: success2,
            title: "The are both happy",
            description: "A happy family is one where there is love, trust and support among family members. Happy families provide emotional and practical support to each other. They help each other through tough times and celebrate each other's successes. Communication: Healthy communication is essential for a happy family. Family members talk openly and listen to each other. They express their feelings and opinions in a respectful and constructive manner."
        },
        {
            id: 3,
            img: success3,
            title: "Our effort to educate well in education",
            description: "Education is one of the most important pillars of any society, and ensuring that we educate well is crucial to the success of individuals and the community as a whole. Invest in teachers: Teachers are the backbone of the education system, and investing in them is essential to ensure that students receive high-quality education. Providing teachers with professional development opportunities, adequate resources, and support can help them improve their teaching skills and better meet the needs of their students."
        },
        {
            id: 4,
            img: success4,
            title: "Helping the woman in need",
            description: "Helping a woman in need can take many forms and depends on the specific situation. Providing emotional support: Letting a woman in need know that you are there for her and that you support her can make a huge difference. Providing a shoulder to cry on, offering words of encouragement, or simply being there for her when she needs it can be incredibly helpful. Connecting her with resources: Sometimes, a woman in need may benefit from professional help or resources. You could help connect her with organizations or agencies that can provide support and services, such as a domestic violence shelter or a counseling center."
        },
        {
            id: 5,
            img: success5,
            title: "Bringing smiles to children's faces",
            description: "Engaging in play: Play is an important part of a child's development, and engaging in play with them can bring joy to their lives. It can be as simple as playing a board game, going to the park, or having a dance party. Sharing positive experiences: Sharing positive experiences, such as going to a new place or trying a new activity, can be an exciting and joyful experience for children. Giving compliments: Complimenting children on their accomplishments or efforts can make them feel valued and appreciated."
        },
        {
            id: 6,
            img: success6,
            title: "To meet their demand for food",
            description: "Food demand refers to the amount and type of food that people want or need to consume at a given time. This demand is affected by several factors, including population growth, income levels, food prices, and cultural and dietary preferences. Population growth is a significant factor in food demand as the more people there are, the more food is needed to meet their nutritional needs. Income levels also play a role in food demand as people with higher incomes tend to have more varied diets and may be able to afford more expensive food items."
        },
    ]
    return (
        <div className='bg-[#d4fcfd] py-14'>
            <div data-aos="fade-left" data-aos-duration="3000">
                <h2 className='text-3xl text-center text-green-600 font-semibold'>Successful Stories</h2>
                <div className='border-2 border-red-600 w-16 mx-auto mb-8 mt-2 rounded'></div>
            </div>
            <Swiper
                spaceBetween={35}
                slidesPerView={1}
                loop={true}
                // centeredSlides={true}
                breakpoints={{
                    800: {
                    slidesPerView: 1.8,
                    },
                    1200: {
                    slidesPerView: 2.7,
                    },
                }}
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                
                // AOS animation 
                data-aos="fade-right" data-aos-duration="3000"
                >
            {
                data.map(item => <SwiperSlide 
                    key={item?.id} 
                    className='bg-white rounded-md p-4 shadow-lg relative'
                    >
                        <img className='w-full h-48 mx-auto' src={item?.img} alt="" /> 
                        <p className='text-center text-2xl mt-6'>{item?.title}</p>
                        <p className='text-[18px] text-justify  p-4'>{item?.description.slice(0, 220)}..
                            <Link className='text-red-600 text-[18px] font-semibold link-hover p-4'>See More</Link>
                        </p>
                        
                    </SwiperSlide>)
            }
        </Swiper>
    </div>
    );
};

export default SuccessStories;