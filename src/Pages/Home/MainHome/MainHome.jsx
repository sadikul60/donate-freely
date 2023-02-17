import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DonateFreely from '../DonateFreely/DonateFreely';
import DonatePlan from '../DonatePlan/DonatePlan';
import DonationNow from '../DonationNow/DonationNow';
import GiveThems from '../GiveThems/GiveThems';
import MVC from '../MVC/MVC';
import RegularDoners from '../Testimonial/Testimonials';
import SuccessStories from '../SuccessStories/SuccessStories';
import Support from '../SupportHumans/Support';

const MainHome = () => {
    return (
        <div className=''>
            <Banner />
            <DonationNow />
            <DonatePlan />
            <Support />
            <GiveThems />
            <MVC />
            <DonateFreely />
            <RegularDoners />
            <SuccessStories />
            <ContactUs />
        </div>
    );
};

export default MainHome;