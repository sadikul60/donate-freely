import React from 'react';
import Banner from '../Banner/Banner';
import DonatePlan from '../DonatePlan/DonatePlan';
import DonationNow from '../DonationNow/DonationNow';
import MVC from '../MVC/MVC';
import Support from '../SupportHumans/Support';

const MainHome = () => {
    return (
        <div className=''>
            <Banner />
            <DonationNow />
            <DonatePlan />
            <Support />
            <MVC />
        </div>
    );
};

export default MainHome;